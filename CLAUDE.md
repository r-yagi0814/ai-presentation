# CLAUDE.md — プロジェクト指示

@rules/rules.md

## 修正対象

修正作業の対象ファイルは以下のみとする。

- `ai_generation_presentation.md`（メイン原稿）
- `html/ai_generation_slides.html`（プレゼン用HTML）

## 必須ルール: MD修正後の3ステップフロー

`ai_generation_presentation.md` を修正した後は、**必ず以下の順番で実行**すること。

1. **MDファイルの修正** — `ai_generation_presentation.md` を修正する
2. **確認** — 修正完了後、ユーザーに「`html/ai_generation_slides.html` も更新しますか？」と必ず確認する
3. **HTMLファイルの更新**（YES の場合のみ） — MDの内容をもとに HTML を更新する

- NOの場合はHTMLを更新しない
- HTMLのCSS・アニメーション・ナビゲーションJSは変更しない
- 詳細は `rules/rules.md` を参照
