/** @type { NodeListOf<Element> } - 監視したい対象 */
const targets = [document.querySelector('#trigger'), document.querySelector('#trigger2')];

/** @type {HTMLElement} - 変化させるボタン要素 */
const btn = document.querySelector('.btn');

/**
 * Intersection Observerに渡すコールバック関数
 * @param { Array } entries - オブジェクトのリスト
 * @param {*} obs - オブサーバー
 */
const callback = (entries, obs) => {
  // 監視対象の中で交差中のものが一つでもあれば、ボタンを非表示
  // それ以外はボタンを常に表示
  entries.some(entry => entry.isIntersecting)
    ? btn.classList.remove('appear')
    : btn.classList.add('appear');

  console.log(entries.every(entry => entry.isIntersecting));
  console.log(entries);
};

const options = {
  root: null, // ターゲットが見えるかどうかを確認するためのビューポートとして使用される要素。指定ないもしくはnullの場合はブラウザのビューポートが使用される
  // threshold: [0.2, 0.8], // 任意の割合に交差した時に処理を実行する
  threshold: 0,
  // threshold: 1,
  rootMargin: '0px 0px 0px 0px', //rootにマージンを設定する。pxはCSSのように省略できない
};

/** @type { IntersectionObserver } - オブザーバーのインスタンス */
const observer = new IntersectionObserver(callback, options);

// 監視開始
targets.forEach(target => observer.observe(target));
// observer.observe(trigger);
