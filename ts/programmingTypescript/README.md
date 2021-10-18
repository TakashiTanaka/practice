# プログラミングTypeScript（オライリー）を読みながら勉強

## コードエディタのセットアップ
- npmでtypescript, tslint, @types/nodeをインストール
- tsconfig.jsonをルートディレクトリに作成
- TSLintは非推奨になってる。ESLintを使用することが推奨されているが、
	ここではとりあえずtslintでやってみる
	`./node_modules/.bin/tslint --init`

## とりあえずhelloと言う（2.4）
`npx tsc index.ts`のち`node index.js`

## 練習問題（2.5）
tsの型推論の確認
ts-nodeを使うとindex.jsを吐き出させずに結果を見れる

## 型の種類
- any（できるだけ避けるべき。なんでもできるから）
- unknown
	tsがunknownと推論することはない（明示的なアノテーションが必要）
- boolean
- number
- bigint
- string
- symbol
- object
