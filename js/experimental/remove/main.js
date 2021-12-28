/** 削除する要素 @type { HTMLElement } */
const item2 = document.querySelector('#item2');

/** 削除ボタン @type { HTMLElement } */
const rmBtn = document.querySelector('#remove-btn');

// 削除ボタンをクリックするとitem2を削除
rmBtn.addEventListener('click', () => {
  item2.remove();
});
