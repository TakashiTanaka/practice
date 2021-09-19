// async awaitも

// Promiseオブジェクトを作成し、resolve関数が解決したらfulfilled状態になる
// let promise = new Promise((resolve) => {
// 	resolve('resolved!');
// });
// console.log(promise);

// async 関数を使ってみる
async function f() {
	return 1;
}

console.log(f());

// const returnText = () => {
// 	setTimeout(() => {
// 		return 'hey';
// 	}, 2000);
// }

// const returnPromise = (callback) => {
// 	return new Promise((resolve) => {
// 		resolve(callback());
// 	});
// }

// returnPromise(returnText)
// 	.then((data) => {
// 		console.log(data);
// 	});

// console.log(returnPromise(returnText));

// returnPromise(returnText)
// 	.then((data) => {
// 		console.log(data);
// 	})

// console.log(returnPromise());

// let result = new Promise((resolve) => {
// 	setTimeout(() => resolve('こちらは後から表示される'), 2000);
// });

// const result = () => {
// 	new Promise((resolve) => {
// 		setTimeout(() => resolve('こちらは後から表示される'), 2000);
// 	});
// }

// result.then(data => console.log(data));
// console.log('こちらのメッセージが先に表示される');