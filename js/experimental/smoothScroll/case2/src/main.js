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

  // ターゲットのハッシュIdまでスクロール
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
