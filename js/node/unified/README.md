# Unified

[unified](https://unifiedjs.com/)

unifiedはコンテンツを作成・操作するためのインターフェイスである
Node.js上で動かす
MarkdownやHTML、プレーンテキストを構造化データに変換し、プラグインをプロセスに挟む事で実現

## 一般的なプロセス

1. Parse（パース）
   MarkdownやHTML、プレーンテキストなどのインプットにはパーサーが必要
   パーサーはインプットしたファイルを構文木に変換する

1. Transform（トランスフォーム）
   プラグインで構文木を変形・変換する

1. Stringify（ストリンギファイ）
   最終的に構文木からMarkdown・HTML、プレーンテキストに出力

## 実践

- [remark-code-titles](./remark-code-titles/README.md)

## 疑問

- ここでいうインターフェイスの意味合い
- 