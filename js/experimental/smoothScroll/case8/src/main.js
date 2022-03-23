// jQueryを読み込み
import $ from 'jquery';

// jQuery用のイージング関数を読み込み
import 'jquery.easing';

// クリックイベントを設定
$('a[href*="#"]').click(e => {
  // デフォルトの処理を無効化
  e.preventDefault();
  /** @type {string} - スクロール先のハッシュ */
  const hash = e.currentTarget.hash;
  /** @type {JQuery<HTMLElement>} - スクロール先の要素 */
  const targetEl = $(hash);
  /** @type {number} - スクロール先の要素のY値 */
  let targetElPosition = targetEl.offset().top;
  /** @type {number} - ヘッダーの高さ */
  const headerHeight = $('#header').height();
  /** @type {number} - スクロール先のY値（） */
  const position = targetElPosition - headerHeight;
  /** @type {number} - スクロールのスピード */
  let speed = 1000;
  // スクロールの実行
  $('html,body').animate({ scrollTop: position }, speed, 'easeInOutCirc');
});
