// gsapを読み込み
import { gsap } from 'gsap';

// ScrollToPluginを読み込み
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// ScrollToPluginを登録
gsap.registerPlugin(ScrollToPlugin);

// hrefの最初に#が記述されているaタグすべてを処理
document.querySelectorAll('a[href*="#"]').forEach(a => {
  // クリックイベントを設定
  a.addEventListener('click', e => {
    // デフォルトの処理を無効化
    e.preventDefault();
    /** @type {number} - スクロール先のハッシュ */
    const hash = e.currentTarget.hash;
    /** @type {number} - ヘッダーの高さ */
    const headerHeight = document.querySelector('#header').getBoundingClientRect().height;
    // スクロール処理
    gsap.to(window, { duration: 2, scrollTo: { y: hash, offsetY: headerHeight }, ease: 'bounce' });
  });
});
