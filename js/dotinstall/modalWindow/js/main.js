// 参考サイト：ドットインストール
// https://dotinstall.com/lessons/modal_js_v3/54101


'use strict';

{
	const open = document.getElementById('open');
	const close = document.getElementById('close');
	const modal = document.getElementById('modal');
	const mask = document.getElementById('mask');

	open.addEventListener('click', () => {
		modal.classList.remove('hidden');
		mask.classList.remove('hidden');
	});

	close.addEventListener('click', () => {
		modal.classList.add('hidden');
		mask.classList.add('hidden');
	});

	mask.addEventListener('click', () => {
		// 要素に対して.click();を使用すると、
		// その要素に対して設定されているクリックイベントが発生する
		// 参考サイト：https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/click
		close.click();
	});
}