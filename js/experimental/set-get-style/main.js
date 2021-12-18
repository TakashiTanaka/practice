// ターゲット要素を取得
const target = document.getElementById('target');

// ターゲット要素のスタイルを取得してコンソールに表示
// 空文字が表示される
console.log(target.style);

// ターゲット要素の背景を設定
target.style.background = 'red';

// ターゲット要素のスタイルを取得してコンソールに表示
// redが表示される
console.log(target.style);
