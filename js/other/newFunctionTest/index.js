// three.js本をやっているときに出てきた謎

// https://stackoverflow.com/questions/40096704/new-function-vs-new-function

// 疑問：下記の2つの違いは何？？？
// 1. let test = new function(){}
// 2. let test = new Function();

// 1は
// 新しいオブジェクトを作成し、コンストラクターとして無名関数を適用したことになる
// 戻り値はオブジェクトになる => {}となる
let test = new function () { };

// 2は
// 新しいオブジェクトを作成し、Functionコンストラクターを適用したことになる
// 戻り値は関数になる => [Function: anonymous]となる
let test2 = new Function();

console.log(test);
console.log(test2);


// また、1の書き方は結局このように書き換えることができる
// 両方とも戻り値は{}
let test3 = new function () { };
let test4 = {};

console.log(test3);
console.log(test4);


// 念の為それぞれ適当にプロパティとメソッドを入れて試してみる
let test5 = new function () {
	this.prop = 'プロパティです';
	this.method = function method() {
		return 'メソッドです';
	}
};

let test6 = {
	prop: 'プロパティです',
	method() {
		return 'メソッドです';
	}
};

console.log(test5);
console.log(test6);