// まだ途中・・

// footerの処理
const fixedFooter = el => {
  // footerを取得
  const footer = document.querySelector(el);
  // footerの高さを取得
  const footerHeight = footer.offsetHeight;
  // windowの高さを取得
  const windowHeight = window.innerHeight;
  // windowのスクロール量
  const yOffset = window.pageYOffset;
  // documentからのfooterの相対位置（上部）
  const footerY = footer.getBoundingClientRect().top + yOffset;

  console.log(windowHeight, footerY, footerHeight, yOffset);

  // 実行時に初期化
  footer.style.position = '';
  footer.style.top = '';

  if (windowHeight > footerY + footerHeight) {
    footer.style.position = 'fixed';
    footer.style.top = `${windowHeight - footerHeight}px`;
  }
};

// 読み込み時に実行
fixedFooter('#footer');

// リサイズ時にも実行する
window.addEventListener('resize', () => fixedFooter('#footer'));

// テスト用のイベント
btn.addEventListener('click', e => {
  content.classList.toggle('is-main-show');
  fixedFooter('#footer');
  console.log(e.target.innerText);
  if (e.target.innerText == 'コンテンツ量を増やす') {
    e.target.innerText = 'コンテンツ量を減らす';
  } else {
    e.target.innerText = 'コンテンツ量を増やす';
  }
});
