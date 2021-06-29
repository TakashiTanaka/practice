// 参考サイト：ドットインストール
// https://dotinstall.com/lessons/basic_canvas_v3


'use strict';

{
	let t = 0;

	function draw() {
		const canvas = document.querySelector('canvas');
		// ブラウザがcanvasを使えるか判定する
		if (typeof canvas.getContext === 'undefined') {
			return;
		}
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		//高解像度ディスプレイ対応
		const CANVAS_WIDTH = 600;
		const CANVAS_HEIGHT = 240;
		const dpr = window.devicePixelRatio || 1;
		canvas.width = CANVAS_WIDTH * dpr;
		canvas.height = CANVAS_HEIGHT * dpr;
		ctx.scale(dpr, dpr);
		canvas.style.width = CANVAS_WIDTH + 'px';
		canvas.style.height = CANVAS_HEIGHT + 'px';

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

		// パス
		// ctx.beginPath();
		// ctx.moveTo(50, 50);
		// ctx.lineTo(100, 50);
		// ctx.lineTo(100, 100);
		// ctx.closePath();
		// ctx.stroke();
		// ctx.fill();

		// ctx.beginPath();
		// ctx.moveTo(100, 50);
		// ctx.lineTo(200, 50);
		// // 点線にする
		// ctx.setLineDash([5, 10]);
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.moveTo(100, 100);
		// ctx.lineTo(200, 100);
		// // 空の配列を渡して点線を解除
		// ctx.setLineDash([]);
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.moveTo(100, 150);
		// ctx.lineTo(200, 150);
		// ctx.lineWidth = 16;
		// //線の終端の形を指定
		// ctx.lineCap = 'round';
		// ctx.stroke();

		// ctx.beginPath();
		// ctx.arc(100, 100, 50, 0, 2 * Math.PI);
		// ctx.arc(100, 100, 50, 0, 300 / 360 * 2 * Math.PI);
		// ctx.moveTo(100, 100);
		// ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI, true);
		// ctx.stroke();
		// ctx.fill();

		// ctx.ellipse(100, 100, 50, 30, 0, 0, 2 * Math.PI);
		// ctx.rect(50, 50, 50, 50);
		// ctx.stroke();

		ctx.font = 'bold 64px Verdana';
		// ctx.textAlign = 'right';
		// ctx.textBaseline = 'top';
		// ctx.fillText('Tokyo', 100, 100);
		// ctx.fillText('Tokyo', 100, 100, 100);
		// ctx.strokeText('Tokyo', 100, 100);

		// const img = document.createElement('img');
		// img.src = 'img/logo.png';
		// img.src = 'img/sprite.png';

		// img.addEventListener('load', () => {
		// ctx.drawImage(img, 0, 0);
		// ctx.drawImage(img, 0, 0, 40, 40);
		// const pattern = ctx.createPattern(img, 'repeat');
		// const pattern = ctx.createPattern(img, 'repeat-x');
		// ctx.fillStyle = pattern;
		// ctx.fillRect(0, 0, canvas.width, canvas.height);

		// 画像を切り出す方法
		// ctx.drawImage(
		// 	img,
		// 	70 * 2, 70, 70, 70, // 切り出す範囲のx,y,width,height
		// 	0, 0, 35, 35 // 描画するx,y,width,height
		// );
		// });

		// ctx.fillStyle = 'pink';
		// ctx.fillRect(0, 0, 200, 200);

		// ctx.beginPath();
		// ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
		// ctx.fillStyle = 'black';
		// ctx.fill();

		// ctx.beginPath();
		// ctx.ellipse(80 + 5 * Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
		// ctx.ellipse(120 + 5 * Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
		// ctx.fillStyle = 'skyblue';
		// ctx.fill();

		// t++;

		// setTimeout(draw, 10);

		// ctx.save();

		// ctx.scale(0.5, 0.5);
		// ctx.translate(400, 0);
		// ctx.rotate(45 / 180 * Math.PI);

		// ctx.fillStyle = 'olive';
		// ctx.fillRect(0, 0, 200, 200);

		// ctx.beginPath();
		// ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
		// ctx.fillStyle = 'black';
		// ctx.fill();

		// ctx.beginPath();
		// ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
		// ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
		// ctx.fillStyle = 'skyblue';
		// ctx.fill();

		// ctx.restore();

		// ctx.fillStyle = 'black';
		// ctx.fillRect(80, 120, 40, 40);
	}

	draw();
}