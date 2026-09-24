# プロジェクトルール

## ルール 1: 修正対象ファイル

修正対象は以下のファイルに限定する。

```
発表用/ai_generation_presentation.md
```

## ルール 2: MDファイル修正後の作業フロー

`ai_generation_presentation.md` を修正した後は、必ず以下の3ステップを順番に実行すること。

### ステップ

1. **MDファイルの修正**　`ai_generation_presentation.md` を修正する
2. **HTMLファイルへの反映確認**　修正完了後、ユーザーに対して以下を確認する
   > 「HTMLファイル（`html/ai_generation_slides.html`）も更新しますか？」
3. **HTMLファイルの更新**（YES の場合のみ）　MDファイルの内容をもとに `html/ai_generation_slides.html` を更新する

### HTMLを更新する場合の方針

- MDのセクション内容（見出し・本文・箇条書き・表）の変更を、HTMLの対応するスライドに反映する
- HTMLのスタイル（CSS・アニメーション・ナビゲーションJS）は変更しない
- MDにセクションが追加された場合は、同等のスライドをHTMLにも追加する
- MDからセクションが削除された場合は、対応するHTMLスライドも削除する
- **NOの場合はHTMLを更新しない**
