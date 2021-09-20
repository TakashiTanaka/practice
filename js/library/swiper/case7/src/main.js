// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import './style.scss';

const swiper = new Swiper('.swiper', {
	loop: true,
	centeredSlides: true,
	speed: 4000,
	effect: "fade",
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
});

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.swiper').style.opacity = '0';
});
window.addEventListener('load', () => {
	document.querySelector('.swiper').style.opacity = '1';
});