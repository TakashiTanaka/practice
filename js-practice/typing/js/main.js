'use strict';

{
	function setWord() {
		word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
		target.textContent = word;
		loc = 0;
	}

	const words = [
		'red', 'blue', 'pink',
	];
	let word;
	let loc = 0;
	let startTime;
	let isPlaying = false;
	const target = document.getElementById('target');

	document.addEventListener('click', () => {
		// もしゲームが始まっていたら、returnする
		if (isPlaying === true) {
			return;
		}
		isPlaying = true;
		startTime = Date.now();
		setWord();
	});

	document.addEventListener('keydown', e => {
		// 早期リターン・アーリーリターンする
		// メインとなる処理以外のケースを早めに除外する
		if (e.key !== word[loc]) {
			return;
		}
		// locを1つ増やす
		loc++;
		// repeatメソッドを使う。ここではloc分繰り返す。
		// そして、loc目から最後までの部分の文字列を結合する
		target.textContent = '_'.repeat(loc) + word.substring(loc);

		if (loc === word.length) {
			if (words.length === 0) {
				// toFixedは指定した小数点後の桁数以下を切り捨てる
				const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
				const result = document.getElementById('result');
				result.textContent = `Finished! ${elapsedTime} seconds!`;
				return;
			}

			setWord();
		}
	});
}