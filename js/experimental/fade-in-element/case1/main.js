/** @type { NodeListOf<Element> } - 監視したい対象 */
const targets = document.querySelectorAll('.box');

/**
 * Intersection Observerに渡すコールバック関数
 * @param { Array } entries - オブジェクトのリスト
 * @param {*} obs - オブサーバー
 */
const callback = (entries, obs) => {
  // entriesには各要素の交差状態の情報が格納されている
  entries.forEach(entry => {
    // console.log(entry);
    // entry.boundingClientRect
    // entry.intersectionRatio
    // entry.intersectionRect
    // entry.isVisible
    // entry.isIntersecting - ルートと交差しているか
    // entry.rootBounds
    // entry.target
    // entry.time
  });

  // console.log(obs);

  entries.forEach(entry => {
    // もし対象が交差していない場合はリターン
    if (!entry.isIntersecting) return;
    // もし対象が交差したらクラスを付与
    entry.target.classList.add('appear');
    // もし対象が交差したら監視を終了
    // targetの監視を止める処理はunobserveメソッドを使う
    obs.unobserve(entry.target);
  });
};

const options = {
  root: null, // ターゲットが見えるかどうかを確認するためのビューポートとして使用される要素。指定ないもしくはnullの場合はブラウザのビューポートが使用される
  // threshold: [0.2, 0.8], // 任意の割合に交差した時に処理を実行する
  threshold: 0.2,
  // threshold: 1,
  // rootMargin: '0px 0px 0px 0px', //rootにマージンを設定する。pxはCSSのように省略できない
};

/** @type { IntersectionObserver } - オブザーバーのインスタンス */
const observer = new IntersectionObserver(callback, options);

// 監視開始
targets.forEach(target => observer.observe(target));
