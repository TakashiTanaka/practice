'use strict';

$(() => {

	// クリックすると要素内の文字を変更・クラスを付与する
	$('#test1-btn').click(() => {
		$('#test1')
			.text('おはよう')
			.addClass('red-text');
	})

	// eqで特定の要素を取得する
	$('#test2 li')
		.eq(2)
		.addClass('red-text');

	// CSSの擬似クラスを使う
	$('#test3 li:nth-child(odd),#test3 li:last-child')
		.addClass('red-text');

	// 要素を作る
	// <>で囲むと要素を作れる
	$('<li>')
		.text('動的に生成された要素')
		.appendTo('#test4');

	// 慣習的としてjqueryオブジェクトであるという事を明示するため、定数の接頭辞に$をつける
	const $input = $('#test5-input');
	$input.focus();

	// inputに入力した値をliで生成する
	$('#test5-btn').click(() => {
		$('<li>')
			.text($input.val()) // 入力された要素の値を取得するにはvalメソッドを使う
			.appendTo('#test5 > ul');
		$input
			.val('')
			.focus(); // focusメソッドでinput要素にフォーカスする
	});

	// 生成されたリスト項目をクリックで削除する
	$('#test5 > ul').click(e => {
		if (e.target.nodeName !== 'LI' || !confirm('Are you sure?')) {
			return;
		}
		$(e.target).fadeOut(); // e.targetにfadeOutを使うために、jqueryオブジェクトに変換している
	});
});