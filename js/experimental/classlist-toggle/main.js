/** @type {HTMLElement} - 色を変更するボックス */
const target = document.querySelector('#target');

// ボタンをクリックするとtargetのクラスをトグルして色を変える
document.querySelector('#btn').addEventListener('click', () => {
  target.classList.toggle('box--blue');
});
