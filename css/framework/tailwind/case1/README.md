# case1 TailwindCSSを導入する

ひとまずTailwindCSSを使えるようにする

`package.json`の`scripts`に下記コマンドを記述。

```json:package.json
"build": "tailwindcss -i ./src/input.css -o ./dist/output.css",
"tailwind:watch": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
"start": "live-server dist & npm run tailwind:watch"
```
