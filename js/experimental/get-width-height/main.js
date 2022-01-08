// boxの情報を取得
const box = document.querySelector('.box');

// clientWidth, clientHeightで取得
const clientWidth = box.clientWidth;
const clientHeight = box.clientHeight;

// offsetWidth, offsetHeightで取得
const offsetWidth = box.offsetWidth;
const offsetHeight = box.offsetHeight;

// getBoundingClientRectで取得
const bcrWidth = box.getBoundingClientRect().width;
const bcrHeight = box.getBoundingClientRect().height;

// 取得した情報をページに表示
cw.textContent = clientWidth;
ch.textContent = clientHeight;
ow.textContent = offsetWidth;
oh.textContent = offsetHeight;
bcrw.textContent = bcrWidth;
bcrh.textContent = bcrHeight;
