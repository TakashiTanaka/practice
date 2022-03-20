// ポリフィルを読み込む
import smoothscroll from 'smoothscroll-polyfill';

// ポリフィルを実行
smoothscroll.polyfill();

/** @type {HTMLElement} - トップへ戻るボタン */
const toTopBtn = document.querySelector('#go-to-top');

// ボタンにクリックイベントを設定
toTopBtn.addEventListener('click', () => {
  // bodyの上辺までスムーススクロール
  document.body.scrollIntoView({ behavior: 'smooth' });
});
