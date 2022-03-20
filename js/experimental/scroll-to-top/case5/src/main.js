// gsapを読み込み
import { gsap } from 'gsap';

// ScrollToPluginを読み込み
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// ScrollToPluginを登録
gsap.registerPlugin(ScrollToPlugin);

/** @type {HTMLElement} - トップへ戻るボタン */
const toTopBtn = document.querySelector('#go-to-top');

// クリックイベントを設定
toTopBtn.addEventListener('click', e => {
  // デフォルトの処理を無効化
  e.preventDefault();
  // スクロール処理
  gsap.to(window, { duration: 2, scrollTo: { y: 0 }, ease: 'bounce' });
});
