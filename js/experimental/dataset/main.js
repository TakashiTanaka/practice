/* rectを取得 */
const rect = document.getElementById('rect');

/* rectのdatasetプロパティ内のxとyを取得 */
let x = rect.dataset.x;
let y = rect.dataset.y;

console.log(x, y, typeof x, typeof y);
// 100 200 string string（返却されるのはstring型）

/* data属性を再代入 */
rect.dataset.x = 400;
rect.dataset.y = 500;

let x2 = rect.dataset.x;
let y2 = rect.dataset.y;

console.log(x2, y2);
// 400 500
