// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import './style.scss';

const swiper = new Swiper('.swiper', {
	loop: true,
	centeredSlides: true,
	slidesPerView: 3,
	spaceBetween: 0,
	speed: 3000,
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
});

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.swiper').style.opacity = '0';
});
window.addEventListener('load', () => {
	document.querySelector('.swiper').style.opacity = '1';
});