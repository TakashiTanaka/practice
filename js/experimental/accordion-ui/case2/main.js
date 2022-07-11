/** @type { HTMLElement } - メニューの表示切り替えボタン */
const btn = document.querySelector('#btn');

/** @type { HTMLElement } - ナビゲーション */
const nav = document.querySelector('#nav');

// ボタンをクリックするとnavを開閉
btn.addEventListener('click', () => {
  if (btn.dataset.open === 'false') {
    /** @type { number } - nac要素内のコンテンツの高さ */
    const contentsHeight = nav.children[0].getBoundingClientRect().height;

    // navの高さをコンテンツの高さに設定
    nav.style = `max-height: ${contentsHeight}px; opacity: 1;`;

    // navの高さをコンテンツの高さに設定
    btn.dataset.open = 'true';
  } else {
    nav.style = `max-height: 0; opacity: 0;`;
    btn.dataset.open = 'false';
  }
});
