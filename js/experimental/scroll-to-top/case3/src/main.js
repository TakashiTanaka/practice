// SmoothScrollを読み込み
import SmoothScroll from 'smooth-scroll';

/** @type {HTMLElement} - トップへ戻るボタン */
const toTopBtn = document.querySelector('#go-to-top');

/** @type {SmoothScroll} - SmoothScrollオブジェクトのインスタンス */
const scroll = new SmoothScroll();

// ボタンにクリックイベントを設定
toTopBtn.addEventListener('click', () => {
  scroll.animateScroll(0, null, {
    speed: 500, // 移動スピード
    easing: 'easeInOutQuint', // イージングを指定
  });
});
