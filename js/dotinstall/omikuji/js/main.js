// 参考サイト：ドットインストール
// https://dotinstall.com/lessons/omikuji_js_v5/50701


'use strict';


// Math.randomが作り出す乱数の値をifで条件分岐させることで、確率を操作する
{
	const btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
		const n = Math.random();
		if (n < 0.05) {
			btn.textContent = '大吉'; // 5%の確率で大吉
		} else if (n < 0.2) {
			btn.textContent = '中吉'; // 15%の確率で中吉
		} else {
			btn.textContent = '凶';// 80%の確率で凶
		}
	});
}


// 単純にMath.randomが作り出す乱数で結果を切り替える
// {
// 	const btn = document.getElementById('btn');

// 	btn.addEventListener('click', () => {
// 		const results = ['大吉', '中吉', '凶', '末吉'];
// 		btn.textContent = results[Math.floor(Math.random() * results.length)];
// 	});
// }


// switch文で切り替える場合
// {
// 	const btn = document.getElementById('btn');

// 	btn.addEventListener('click', () => {
// 		const n = Math.floor(Math.random() * 3);
// 		btn.textContent = n;

// 		switch (n) {
// 			case 0:
// 				btn.textContent = '大吉';
// 				break;
// 			case 1:
// 				btn.textContent = '中吉';
// 				break;
// 			case 2:
// 				btn.textContent = '凶';
// 				break;

// 		}
// 	});
// }