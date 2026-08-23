# Gemini中継用 Cloudflare Worker のデプロイ手順

ローカルに何もインストールせず、ブラウザだけで完結する手順です。

## 1. Cloudflareの無料アカウントを作る

1. https://dash.cloudflare.com/sign-up にアクセスし、メールアドレスで無料登録

## 2. Workerを作成する

1. ダッシュボード左メニューの「Workers & Pages」を開く
2. 「Create」→「Create Worker」を選ぶ
3. 名前を付ける(例: `agricola-gemini-proxy`)。この名前がURLの一部になります
4. 「Deploy」を押して、まずは仮のコードでデプロイする

## 3. コードを差し替える

1. デプロイ後の画面で「Edit code」(または「Quick edit」)を開く
2. エディタの中身を全部消して、このリポジトリの `worker/gemini-proxy.js` の内容を丸ごと貼り付ける
3. 右上の「Deploy」(保存)を押す

## 4. AI Gatewayを作る(地域制限エラー対策)

CloudflareのWorkerは実行される場所(エッジ拠点)が毎回変わることがあり、Geminiが未対応の地域から実行されると `User location is not supported for the API use` というエラーになることがあります。無料の「AI Gateway」を経由させることでこれを回避します。

1. Cloudflareダッシュボードの左メニューから「AI」→「AI Gateway」を開く(見当たらない場合は上部の検索ボックスに「AI Gateway」と入力)
2. 「Create Gateway」(または「+ Create」)を押し、名前を付ける(例: `agricola-gateway`)。作成するだけでよく、追加の設定は不要
3. 作成後の画面に表示されている以下の2つをメモする
   - **Account ID**(アカウントID。ダッシュボードのどのページでも右下や画面内に表示されています)
   - 今つけたGatewayの名前(例: `agricola-gateway`)
4. Workerの「Edit code」を開き、`worker/gemini-proxy.js` の以下の2行を、メモした値に書き換える
   ```js
   const CF_ACCOUNT_ID = 'YOUR_CLOUDFLARE_ACCOUNT_ID';
   const CF_GATEWAY_NAME = 'YOUR_GATEWAY_NAME';
   ```
5. 「Deploy」(保存)を押す

## 5. シークレット(APIキーなど)を設定する

1. そのWorkerの管理画面で「Settings」→「Variables and Secrets」を開く
2. 以下の2つを追加。**どちらも「Encrypt」(Secret)にチェック**を入れてください
   - `GEMINI_API_KEY` : Google AI Studioで発行したAPIキー
   - `APP_SHARED_SECRET` : 自分で決めた適当なランダム文字列(例: パスワード生成ツールで作った32文字程度の文字列)。第三者にこのWorkerを勝手に使われて無料枠を消費されるのを防ぐためのものです
3. 保存する

## 6. WorkerのURLを控える

- Worker管理画面の上部に表示されている `https://xxxxxxxx.yyyyyy.workers.dev` のようなURLをコピーしてください
- このURLと、手順4で決めた `APP_SHARED_SECRET` の値の**2つ**を、アプリ側の設定に使います(次のステップで案内します)

## 補足: 費用について

`GEMINI_API_KEY` に紐づくGoogle Cloudプロジェクトに請求先アカウント(クレジットカード)を追加しない限り、無料枠を超えたリクエストは失敗するだけで、課金は発生しません。
