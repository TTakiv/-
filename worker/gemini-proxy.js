// Cloudflare Worker: proxies card-photo OCR requests to the Gemini API.
//
// Why this exists: the app itself is a static site on GitHub Pages, which
// cannot hide a secret API key (anything in the client bundle is public).
// This Worker holds the Gemini API key as a server-side secret and is the
// only thing that ever talks to Google's API.
//
// Deploy: paste this file's contents into a Cloudflare Workers "Quick Edit"
// (see README-deploy.md in this folder for the full walkthrough), then set
// two secrets in the Worker's settings (Settings -> Variables and Secrets):
//   GEMINI_API_KEY    - the key from https://aistudio.google.com/app/apikey
//   APP_SHARED_SECRET - any random string you make up yourself
// and set the same APP_SHARED_SECRET value in the app's config
// (src/ocr/geminiConfig.ts) so only this app's requests are accepted.
//
// Cost safety: as long as the Google Cloud project behind GEMINI_API_KEY has
// no billing account linked, requests past the free tier simply fail with an
// error (see the 429/403 handling below) — nothing here can cause a charge.
//
// Requests are routed through a Cloudflare AI Gateway instead of calling
// Google directly, because a Worker can execute from edge locations Google's
// public Gemini API rejects with "User location is not supported for the API
// use" (this happens intermittently - Cloudflare picks whichever nearby PoP
// handles a given request). The AI Gateway proxies from a location Google
// always accepts. Create a free Gateway at Cloudflare dashboard -> AI ->
// AI Gateway -> Create Gateway, then fill in your account ID and the
// gateway's name below (neither is a secret; both are visible in the
// dashboard URL when the Gateway is open).

const CF_ACCOUNT_ID = 'YOUR_CLOUDFLARE_ACCOUNT_ID';
const CF_GATEWAY_NAME = 'YOUR_GATEWAY_NAME';

const ALLOWED_ORIGINS = new Set([
  'https://ttakiv.github.io',
  'http://localhost:5173',
]);

const MODEL = 'gemini-flash-lite-latest';

const PROMPT = `この画像には、ボードゲーム「アグリコラ」の職業カードまたは進歩カードが1枚以上写っています。
写っているカードの名前だけを、画像内で見える順番にすべて日本語で抽出してください。

ルール:
・カード名以外の文字(コストの数字、効果の説明文、記号など)は絶対に含めないでください
・カードが1枚も写っていない場合や、名前が読み取れない場合は空の配列を返してください
・同じカードを重複して数えないでください
・出力はカード名の文字列だけを要素とするJSON配列にしてください`;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.has(origin) ? origin : '';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-App-Secret',
    Vary: 'Origin',
  };
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }
    if (!ALLOWED_ORIGINS.has(origin)) {
      return json({ error: 'origin_not_allowed' }, 403, headers);
    }
    if (request.method !== 'POST') {
      return json({ error: 'method_not_allowed' }, 405, headers);
    }
    if (request.headers.get('X-App-Secret') !== env.APP_SHARED_SECRET) {
      return json({ error: 'unauthorized' }, 401, headers);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: 'invalid_json' }, 400, headers);
    }

    const { imageBase64, mimeType } = payload;
    if (!imageBase64 || !mimeType) {
      return json({ error: 'missing_image' }, 400, headers);
    }

    const geminiUrl = `https://gateway.ai.cloudflare.com/v1/${CF_ACCOUNT_ID}/${CF_GATEWAY_NAME}/google-ai-studio/v1beta/models/${MODEL}:generateContent`;
    const geminiRequest = {
      contents: [
        {
          parts: [{ text: PROMPT }, { inlineData: { mimeType, data: imageBase64 } }],
        },
      ],
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: { type: 'ARRAY', items: { type: 'STRING' } },
      },
    };

    let geminiRes;
    try {
      geminiRes = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
        body: JSON.stringify(geminiRequest),
      });
    } catch {
      return json({ error: 'gemini_unreachable' }, 502, headers);
    }

    if (!geminiRes.ok) {
      // 429 = free-tier rate limit hit; billing is not enabled on the key,
      // so this is the expected way "over quota" surfaces — never a charge.
      const status = geminiRes.status === 429 ? 429 : 502;
      const detail = await geminiRes.text();
      return json({ error: 'gemini_error', geminiStatus: geminiRes.status, detail }, status, headers);
    }

    const data = await geminiRes.json();
    let names;
    try {
      const text = data.candidates[0].content.parts[0].text;
      names = JSON.parse(text);
      if (!Array.isArray(names)) throw new Error('not an array');
    } catch {
      return json({ error: 'parse_error' }, 502, headers);
    }

    return json({ names }, 200, headers);
  },
};
