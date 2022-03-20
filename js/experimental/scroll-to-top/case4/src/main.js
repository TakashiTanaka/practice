// jQueryを読み込み
import $ from 'jquery';

// jQuery用のイージング関数を読み込み
import 'jquery.easing';

// ボタンにクリックイベントを設定
$('#go-to-top').click(() => {
  /** @type {number} - スクロール先のY値 */
  let position = 0;
  /** @type {number} - スクロールのスピード */
  let speed = 1000;
  // スクロールの実行
  $('html,body').animate({ scrollTop: position }, speed, 'easeInOutCirc');
});
