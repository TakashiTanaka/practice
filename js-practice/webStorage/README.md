# WebStorage

ドットインストールで紹介されていた、
WebStorageを学びました

参考URL
https://dotinstall.com/lessons/basic_webstorage

## 基本
同一オリジン（スキーム・ホスト・ポート）

sessionStorage→タブが閉じられるまで有効
新しいタブではデータは共有されない

localStorage→ブラウザ自体にずっと保存 
別のタブでもデータが共有される

## 使い方
const ls = localStorage;
const ss = sessionStorage;
のように定数化しておくと使いまわしやすい

setItem(key,value)
getItem(key)
removeItem(key)
clear()
length
key(n)

JSON.stringify()
JSON→文字列
JSON.parse()
文字列→JSON
console.dirはオブジェクトを見たい時に便利

Storageに何らかの変更があった時に発動するイベントを設定する

window.addEventListener('storage', e => {
	e.key
	e.oldValue
	e.newValue
	e.storageArea
	e.url
});
