// footerの処理
const fixedFooter = () => {
  let $ftr = $('#footer');

  // 実行時に初期化
  $ftr.attr({ style: 'position:""; top:"";' });

  // 1. ブラウザの高さとブラウザの上辺からfooterの上辺までの距離 + footerの高さを比較する
  // 2. もしブラウザの高さがブラウザの上辺からfooterの上辺までの距離 + footerの高さよりも高かったら処理を実行する
  if (window.innerHeight > $ftr.offset().top + $ftr.outerHeight()) {
    // 3. 処理の内容はfooterのpositionをfixedに、topをwindow.innerHeight - footerの高さに設定する
    $ftr.attr({
      style:
        'position:fixed; top:' +
        (window.innerHeight - $ftr.outerHeight()) +
        'px;',
    });
  }
};

// 読み込み時に実行
fixedFooter();

// リサイズ時にも実行する
window.addEventListener('resize', fixedFooter);

// テスト用のイベント
btn.addEventListener('click', e => {
  content.classList.toggle('is-main-show');
  fixedFooter();
  console.log(e.target.innerText);
  if (e.target.innerText == 'コンテンツ量を増やす') {
    e.target.innerText = 'コンテンツ量を減らす';
  } else {
    e.target.innerText = 'コンテンツ量を増やす';
  }
});
