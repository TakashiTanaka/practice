// 要素の取得
const screenWidth = document.querySelector('.screen-width > span');
const viewWidth = document.querySelector('.view-width > span');
const redBox = document.querySelector('.red-box');
const redBoxVal = document.querySelector('.red-box__value > span');
const blueText = document.querySelector('.blue-text');
const blueTextVal = document.querySelector('.blue-text__value > span');
const greenText = document.querySelector('.green-text');
const greenTextVal = document.querySelector('.green-text__value > span');

// 要素のテキストを設定する関数
const setTextContent = (el, val) => (el.textContent = val);

// テキストの設定をまとめた関数
const setValues = () => {
  setTextContent(screenWidth, window.innerWidth);
  setTextContent(viewWidth, window.innerWidth / 100);
  setTextContent(redBoxVal, redBox.getBoundingClientRect().width);
  setTextContent(blueTextVal, parseInt(getComputedStyle(blueText).getPropertyValue('font-size')));
  setTextContent(greenTextVal, parseInt(getComputedStyle(greenText).getPropertyValue('font-size')));
};

// 初期化
setValues();

// リサイズ時にsetValuesを実行
window.addEventListener('resize', setValues);
