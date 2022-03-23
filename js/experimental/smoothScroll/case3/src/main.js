// ポリフィルを読み込む
import smoothscroll from 'smoothscroll-polyfill';

// ポリフィルを実行
smoothscroll.polyfill();

// クリックイベントを設定
document.addEventListener('click', e => {
  /** @type {EventTarget} - クリックされた要素 */
  const target = e.currentTarget;

  // clickした要素がclass属性、js-smooth-scrollを含まない場合は処理を中断
  if (!target.classList.contains('js-smooth-scroll')) return;

  // クリックされた要素のデフォルトの処理を無効化
  e.preventDefault();

  /** @type {string} - クリックされた要素のhrefのハッシュId */
  const targetId = target.hash;

  /** @type {HTMLElement} - 移動先の要素 */
  const targetElement = document.querySelector(targetId);

  /** @type {number} - 画面上部から要素までの距離 */
  const rectTop = targetElement.getBoundingClientRect().top;

  /** @type {number} - 現在のスクロール距離 */
  const offsetTop = window.pageYOffset;

  /** @type {string} - スクロール位置に持たせるバッファ */
  const buffer = 200;

  /** @type {string} - スクロール先の上辺位置 */
  const top = rectTop + offsetTop - buffer;

  // スクロール
  window.scrollTo({
    top,
    behavior: 'smooth',
  });
});
