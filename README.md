# HELL Creative Room

GitHub Pages向けに、従来の単一HTML版から画像・CSS・JavaScriptを分離した版です。

## 構成

- `index.html` — 本体
- `css/style.css` — 見た目
- `js/app.js` — 質問・保存・表情切替などの処理
- `assets/images/` — U-RED / Tyro / Swalo / 休憩室の画像
- `.nojekyll` — GitHub Pages用

## 大事：保存データについて

HELL Creative Roomのメモはブラウザの `localStorage` に保存されます。
Netlify版とGitHub Pages版はURL（origin）が違うため、保存データは自動では移りません。

移行前にNetlify版の **バックアップ保存** でJSONを保存し、GitHub Pages版で **バックアップ読込** を使って復元してください。


