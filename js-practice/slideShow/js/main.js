'use strict';

{
	const images = [
		'img/pic00.png',
		'img/pic01.png',
		'img/pic02.png',
		'img/pic03.png',
		'img/pic04.png',
		'img/pic05.png',
		'img/pic06.png',
		'img/pic07.png'
	];
	let currentIndex = 0;

	const mainImage = document.getElementById('main');
	mainImage.src = images[currentIndex];

	// foreachでは第一引数がvalue, 第2引数がkey
	images.forEach((image, index) => {
		const img = document.createElement('img');
		img.src = image;

		const li = document.createElement('li');
		if (index === currentIndex) {
			li.classList.add('current');
		};
		li.addEventListener('click', () => {
			mainImage.src = image;
			const thumbnails = document.querySelectorAll('.thumbnails > li');
			thumbnails[currentIndex].classList.remove('current');
			currentIndex = index;
			thumbnails[currentIndex].classList.add('current');
		});

		li.appendChild(img);
		document.querySelector('.thumbnails').appendChild(li);
	});

	const next = document.getElementById('next');
	next.addEventListener('click', () => {
		let target = currentIndex + 1;
		if (target === images.length) {
			target = 0;
		}
		document.querySelectorAll('.thumbnails > li')[target].click();
	});

	const previous = document.getElementById('previous');
	previous.addEventListener('click', () => {
		let target = currentIndex - 1;
		if (target < 0) {
			target = images.length - 1;
		}
		document.querySelectorAll('.thumbnails > li')[target].click();
	});

	let timeoutId;

	function playSlideshow() {
		// clearTimeoutに値を渡すために変数に代入
		timeoutId = setTimeout(() => {
			next.click();
			playSlideshow();
		}, 1000);
	}

	let isPlaying = false;

	const play = document.getElementById('play');
	play.addEventListener('click', () => {
		if (isPlaying === false) {
			playSlideshow();
			play.textContent = 'Pause';
		} else {
			// clearTimeoutはsetTimeoutの返り値が必要
			clearTimeout(timeoutId);
			play.textContent = 'Play';
		}
		isPlaying = !isPlaying;
	});
}