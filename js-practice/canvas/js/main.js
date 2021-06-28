// 参考サイト：ドットインストール
// https://dotinstall.com/lessons/basic_canvas_v3


'use strict';

{
	function draw() {
		const canvas = document.querySelector('canvas');
		if (typeof canvas.getContext === 'undefined') {
			return;
		}
		const ctx = canvas.getContext('2d');

		/* 基本
		ctx.fillStyle = 'pink'; // 塗りをpinkに指定
		ctx.strokeStyle = 'red'; // 線をredに指定
		ctx.lineWidth = 8; // 線幅を8pxに指定
		ctx.lineJoin = 'round'; // 線がつながる部分をroundに指定
		ctx.fillRect(50, 50, 50, 50); // 塗り有りの矩形を描画
		ctx.strokeRect(50, 50, 50, 50); // 塗り無しの矩形を描画
		*/

		/* 線形グラデーション
		const g = ctx.createLinearGradient(0, 0, canvas.width, 0); // 線形グラデーションを追加し、変数に格納
		g.addColorStop(0, '#f00'); // グラデーション色を追加、始点を赤を指定
		g.addColorStop(0.3, '#0f0'); // グラデーション色を追加、30%の位置に緑を指定
		g.addColorStop(1, '#00f'); //グラデーション色を追加、終点に青を指定
		ctx.fillStyle = g; // 塗りを適用
		ctx.fillRect(0, 0, canvas.width, canvas.height); // 画面いっぱいの矩形を描画
		*/

		/* 円形グラデーション
		const g = ctx.createRadialGradient(
			canvas.width / 2, canvas.height / 2, 10,
			canvas.width / 2, canvas.height / 2, 500
		); // 円形グラデーションを追加し、変数に格納
		g.addColorStop(0, '#f00'); // グラデーション色を追加、始点を赤を指定
		g.addColorStop(0.3, '#0f0'); // グラデーション色を追加、30%の位置に緑を指定
		g.addColorStop(1, '#00f'); //グラデーション色を追加、終点に青を指定
		ctx.fillStyle = g; // 塗りを適用
		ctx.fillRect(0, 0, canvas.width, canvas.height); // 画面いっぱいの矩形を描画
		*/

		/* シャドウ
		ctx.shadowOffsetX = 4;
		ctx.shadowOffsetY = 4;
		ctx.shadowBlur = 4;
		ctx.shadowColor = 'rgba(0,0,0,0.3)';
		ctx.fillRect(50, 50, 50, 50);
		*/

	}

	draw();
}