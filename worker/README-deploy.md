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

## 4. シークレット(APIキーなど)を設定する

1. そのWorkerの管理画面で「Settings」→「Variables and Secrets」を開く
2. 以下の2つを追加。**どちらも「Encrypt」(Secret)にチェック**を入れてください
   - `GEMINI_API_KEY` : Google AI Studioで発行したAPIキー
   - `APP_SHARED_SECRET` : 自分で決めた適当なランダム文字列(例: パスワード生成ツールで作った32文字程度の文字列)。第三者にこのWorkerを勝手に使われて無料枠を消費されるのを防ぐためのものです
3. 保存する

## 5. WorkerのURLを控える

- Worker管理画面の上部に表示されている `https://xxxxxxxx.yyyyyy.workers.dev` のようなURLをコピーしてください
- このURLと、手順4で決めた `APP_SHARED_SECRET` の値の**2つ**を、アプリ側の設定に使います(次のステップで案内します)

## 補足: 費用について

`GEMINI_API_KEY` に紐づくGoogle Cloudプロジェクトに請求先アカウント(クレジットカード)を追加しない限り、無料枠を超えたリクエストは失敗するだけで、課金は発生しません。
