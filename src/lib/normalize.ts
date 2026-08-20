const KATAKANA_START = 0x30a1;
const KATAKANA_END = 0x30f6;
const HIRAGANA_START = 0x3041;

function katakanaToHiragana(str: string): string {
  let out = '';
  for (const ch of str) {
    const code = ch.codePointAt(0)!;
    if (code >= KATAKANA_START && code <= KATAKANA_END) {
      out += String.fromCodePoint(code - KATAKANA_START + HIRAGANA_START);
    } else {
      out += ch;
    }
  }
  return out;
}

/**
 * Normalize a card name so OCR noise / spacing / full-width vs half-width
 * differences don't prevent matching against the stored card database.
 */
export function normalizeCardName(raw: string): string {
  return katakanaToHiragana(
    raw
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[\s　]+/g, '')
      .replace(/[「」『』【】()（）・.,、。'"’”:：!!?？\-–—]/g, ''),
  );
}
