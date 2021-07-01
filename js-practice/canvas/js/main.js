// 参考サイト：ドットインストール
// https://dotinstall.com/lessons/basic_canvas_v3


'use strict';

{
	let t = 0;
	const draw = (el, mode) => {
		const canvas = document.querySelector(el);
		// ブラウザがcanvasを使えるか判定する
		if (typeof canvas.getContext === 'undefined') {
			return;
		}
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		//高解像度ディスプレイ対応
		const CANVAS_WIDTH = 200;
		const CANVAS_HEIGHT = 200;
		const dpr = window.devicePixelRatio || 1;
		canvas.width = CANVAS_WIDTH * dpr;
		canvas.height = CANVAS_HEIGHT * dpr;
		ctx.scale(dpr, dpr);
		canvas.style.width = CANVAS_WIDTH + 'px';
		canvas.style.height = CANVAS_HEIGHT + 'px';

		// 基本
		const basic = (el) => {
			el.fillStyle = 'pink'; // 塗りをpinkに指定
			el.strokeStyle = 'red'; // 線をredに指定
			el.lineWidth = 8; // 線幅を8pxに指定
			el.lineJoin = 'round'; // 線がつながる部分をroundに指定
			el.fillRect(50, 50, 50, 50); // 塗り有りの矩形を描画
			el.strokeRect(50, 50, 50, 50); // 塗り無しの矩形を描画
		}

		// 線形グラデーション
		const linearGradient = (el) => {
			const g = el.createLinearGradient(0, 0, canvas.width, 0); // 線形グラデーションを追加し、変数に格納
			g.addColorStop(0, '#f00'); // グラデーション色を追加、始点を赤を指定
			g.addColorStop(0.3, '#0f0'); // グラデーション色を追加、30%の位置に緑を指定
			g.addColorStop(1, '#00f'); //グラデーション色を追加、終点に青を指定
			el.fillStyle = g; // 塗りを適用
			el.fillRect(0, 0, canvas.width, canvas.height); // 画面いっぱいの矩形を描画
		}

		// 円形グラデーション
		const radialGradient = (el) => {
			const g = el.createRadialGradient(
				canvas.width / 2, canvas.height / 2, 10,
				canvas.width / 2, canvas.height / 2, 500
			); // 円形グラデーションを追加し、変数に格納
			g.addColorStop(0, '#f00'); // グラデーション色を追加、始点を赤を指定
			g.addColorStop(0.3, '#0f0'); // グラデーション色を追加、30%の位置に緑を指定
			g.addColorStop(1, '#00f'); //グラデーション色を追加、終点に青を指定
			el.fillStyle = g; // 塗りを適用
			el.fillRect(0, 0, canvas.width, canvas.height); // 画面いっぱいの矩形を描画
		}

		// シャドウ
		const shadow = (el) => {
			el.fillStyle = 'skyblue'; // 塗りをpinkに指定
			el.lineWidth = 8; // 線幅を8pxに指定
			el.lineJoin = 'round'; // 線がつながる部分をroundに指定
			el.shadowOffsetX = 10;
			el.shadowOffsetY = 10;
			el.shadowBlur = 4;
			el.shadowColor = 'rgba(0,0,0,0.3)';
			el.fillRect(50, 50, 100, 100);
		}

		// パス
		const drawPath = (el) => {
			el.beginPath();
			el.moveTo(50, 50);
			el.lineTo(100, 50);
			el.lineTo(100, 100);
			el.closePath();
			el.stroke();
			// el.fill();
		}

		const drawDotPath = (el) => {
			el.beginPath();
			el.moveTo(50, 50);
			el.lineTo(150, 50);
			// 点線にする
			el.setLineDash([5, 10]);
			el.stroke();
			el.beginPath();
			el.moveTo(50, 100);
			el.lineTo(150, 100);
			// 空の配列を渡して点線を解除
			el.setLineDash([]);
			el.stroke();
		}

		const drawPath2 = (el) => {
			el.beginPath();
			el.moveTo(50, 100);
			el.lineTo(150, 100);
			el.lineWidth = 16;
			//線の終端の形を指定
			el.lineCap = 'round';
			el.stroke();
		}

		const drawArc = (el) => {
			el.beginPath();
			el.arc(100, 100, 50, 0, 2 * Math.PI);
			// el.arc(100, 100, 50, 0, 300 / 360 * 2 * Math.PI);
			// el.moveTo(100, 100);
			// el.arc(100, 100, 50, 0, 300 / 180 * Math.PI, true);
			el.stroke();
			// el.fill();
		}

		const drawEllipseAndRect = (el) => {
			el.ellipse(100, 100, 50, 30, 0, 0, 2 * Math.PI);
			el.rect(50, 50, 50, 50);
			el.stroke();
		}

		const drawText = (el) => {
			el.font = 'bold 48px Verdana';
			el.textAlign = 'center';
			el.textBaseline = 'middle';
			el.fillText('Tokyo', 100, 100);
			// el.fillText('Tokyo', 100, 100, 100);
			// el.strokeText('Tokyo', 100, 100);
		}

		const drawImg = (el) => {
			const img = document.createElement('img');
			img.src = 'img/logo.png';
			img.addEventListener('load', () => {
				// el.drawImage(img, 0, 0);
				// el.drawImage(img, 0, 0, 40, 40);
				const pattern = el.createPattern(img, 'repeat');
				// const pattern = el.createPattern(img, 'repeat-x');
				el.fillStyle = pattern;
				el.fillRect(0, 0, canvas.width, canvas.height);
			});
		}

		const cropImg = (el) => {
			const img = document.createElement('img');
			img.src = 'img/sprite.png';

			img.addEventListener('load', () => {
				// 画像を切り出す方法
				el.drawImage(
					img,
					70 * 2, 70, 70, 70, // 切り出す範囲のx,y,width,height
					0, 0, 35, 35 // 描画するx,y,width,height
				);
			});
		}


		const drawRobot = (el) => {
			// 背景
			el.fillStyle = 'white';
			el.fillRect(0, 0, 200, 200);

			// 顔
			el.beginPath();
			el.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
			el.fillStyle = 'black';
			el.fill();

			// 目
			el.beginPath();
			el.ellipse(80 + 5 * Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
			el.ellipse(120 + 5 * Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
			el.fillStyle = 'skyblue';
			el.fill();

			t++;

			setTimeout(() => {
				draw('.c-13', 'drawRobot');
			}, 10);

			// el.save();

			// el.scale(0.5, 0.5);
			// el.translate(400, 0);
			// el.rotate(45 / 180 * Math.PI);

			// el.fillStyle = 'olive';
			// el.fillRect(0, 0, 200, 200);

			// el.beginPath();
			// el.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
			// el.fillStyle = 'black';
			// el.fill();

			// el.beginPath();
			// el.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
			// el.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
			// el.fillStyle = 'skyblue';
			// el.fill();

			// el.restore();

			//胴体
			el.fillStyle = 'black';
			el.fillRect(80, 120, 40, 40);
		}

		switch (mode) {
			case 'basic':
				basic(ctx);
				break;
			case 'linearGradient':
				linearGradient(ctx);
				break;
			case 'radialGradient':
				radialGradient(ctx);
				break;
			case 'shadow':
				shadow(ctx);
				break;
			case 'drawPath':
				drawPath(ctx);
				break;
			case 'drawDotPath':
				drawDotPath(ctx);
				break;
			case 'drawPath2':
				drawPath2(ctx);
				break;
			case 'drawArc':
				drawArc(ctx);
				break;
			case 'drawEllipseAndRect':
				drawEllipseAndRect(ctx);
				break;
			case 'drawText':
				drawText(ctx);
				break;
			case 'drawImg':
				drawImg(ctx);
				break;
			case 'cropImg':
				cropImg(ctx);
				break;
			case 'drawRobot':
				drawRobot(ctx);
				break;
		}
	}

	const drawCanvas = () => {
		draw('.c-1', 'basic');
		draw('.c-2', 'linearGradient');
		draw('.c-3', 'radialGradient');
		draw('.c-4', 'shadow');
		draw('.c-5', 'drawPath');
		draw('.c-6', 'drawDotPath');
		draw('.c-7', 'drawPath2');
		draw('.c-8', 'drawArc');
		draw('.c-9', 'drawEllipseAndRect');
		draw('.c-10', 'drawText');
		draw('.c-11', 'drawImg');
		draw('.c-12', 'cropImg');
		draw('.c-13', 'drawRobot');
	}

	document.addEventListener('DOMContentLoaded', drawCanvas);
}