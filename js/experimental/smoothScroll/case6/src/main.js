// SmoothScrollを読み込み
import SmoothScroll from 'smooth-scroll';

/** @type {SmoothScroll} - SmoothScrollオブジェクトのインスタンス */
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600, // 移動スピード
  easing: 'easeInOutQuint', // イージングを指定
  updateURL: false,
  offset: () => document.getElementById('header').getBoundingClientRect().height,
});
