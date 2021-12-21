// 各値を表示するための要素を取得
const contentHeightVal = document.querySelector('#content-height-val');
const scrollYVal = document.querySelector('#scroll-y-val');
const windowHeightVal = document.querySelector('#window-height-val');

// 高さをもたせたコンテンツエリア
const contents = document.querySelector('#contents');

// コンテンツエリアの高さを取得
const contentsHeight = contents.clientHeight;

// コンテンツエリアの高さを表示
contentHeightVal.textContent = contentsHeight;

// ウィンドウの高さを表示
windowHeightVal.textContent = window.innerHeight;

// スクロールでスクロール量を更新
addEventListener('scroll', () => {
  scrollYVal.textContent = window.scrollY;
});

// ウィンドウリサイズでウィンドウの高さを更新
addEventListener('resize', () => {
  windowHeightVal.textContent = window.innerHeight;
});

/* 定規 */
const ruler = document.getElementById('ruler');

const rulez = new Rulez({
  element: ruler,
  layout: 'vertical',
  textDefaults: {
    rotation: 90,
  },
});

rulez.render();
