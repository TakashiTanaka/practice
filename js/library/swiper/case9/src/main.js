// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import './style.scss';

const swiper = new Swiper('.swiper', {
	loop: true,
	freeMode: true,
	centeredSlides: true,
	slidesPerView: 3,
	spaceBetween: 0,
	speed: 6000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	on: {
		slideChangeTransitionStart: function () {
			document.querySelector('.swiper-wrapper').style.transitionTimingFunction = 'linear';
		}
	},
});

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.swiper').style.opacity = '0';
});
window.addEventListener('load', () => {
	document.querySelector('.swiper').style.opacity = '1';
});