## Getting Started

開発環境を起動する際は以下のコマンドを実行する

```bash
npm run dev
# or
yarn dev
```

上記を実行すると [http://localhost:3000](http://localhost:3000) でブラウザが起動し結果を確認できます。

初回表示されるページは `pages/index.tsx`です。
コードの更新を行った際は自動でページに反映されます。

※ReactStrictMode をオンにしていると `useDispatch` が二回発火してしまうため正しい動作を確認したい際は以下のようにコメントアウトするか、true を false に書き換えてください。

```next.config.js
module.exports = {
  // useDispatchが何故か二回実行されるのでこのオプションは外す.
  // reactStrictMode: true,
};

```
