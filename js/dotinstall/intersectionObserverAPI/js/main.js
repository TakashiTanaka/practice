'use strict';

{
	const targets = document.querySelectorAll('img');

	// 監視が始まったときとスクロールしていって、デフォルトだと target が 0% 交差したときに実行される
	function callback(entries, obs) { // IntersectionObserverは監視対象を配列で返す
		console.log(entries);

		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			}
			entry.target.classList.add('appear');
			obs.unobserve(entry.target); //targetの監視を止める処理はunobserveメソッドを使う
		})

		// if (entries[0].isIntersecting) {
		// 	entries[0].target.classList.add('appear');
		// } else {
		// 	entries[0].target.classList.remove('appear');
		// }
	}

	const options = {
		// threshold: [0.2, 0.8], // 任意の割合に交差した時に処理を実行する
		threshold: 0.2,
		// threshold: 1,
		// rootMargin: '0px 0px -100px' //rootにマージンを設定する。pxはCSSのように省略できない
	}

	const observer = new IntersectionObserver(callback, options);

	targets.forEach(target => {
		observer.observe(target);
	});
}