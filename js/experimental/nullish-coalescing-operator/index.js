// 左辺がnullなので右の値（default string）を返す
const foo = null ?? 'default string';

// "default string"
console.log(foo);

// 左辺が0なので左辺の0を返す
// 0はfalsyな値だが、nullとundefinedではない
const baz = 0 ?? 42;

// 0
console.log(baz);
