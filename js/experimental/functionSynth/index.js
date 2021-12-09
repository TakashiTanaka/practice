// Ramdaをインストール
const R = require('ramda');

// 最初に引数を一つだけとる合成関数
const compose = (...fns) => arg => fns.reduce((compose, f) => f(compose), arg);

// 引数をとらない合成関数
// const compose = (...fns) => fns.reduce((compose, f) => f(compose));

// では引数を複数とる合成関数は？？
// 引数をオブジェクトとか、配列とかにする？

{
	// const sayHello = () => "Hello!";
	// const giveName = name => `My name is ${name}.`;
	// const greet = () => 'Nice to meet you!';
	// const favorite = favSubject => favThing => `My favorite ${favSubject} is ${favThing}!`;
	// const joinStr = (...str) => str.join(' ');
	// const logger = msg => console.log(msg);

	// const greeting = ({ name, favSubject, favThing }) => joinStr(sayHello(), giveName(name), greet(), favorite(favSubject)(favThing));

	// const greetingLogger = compose(greeting, logger);

	// // 最初に渡す引数をオブジェクト型にしてみたら複数渡せる事がわかった
	// // しかしこの方法だと自由度が低い...
	// greetingLogger({ name: 'fkoji', favSubject: 'color', favThing: 'blue' });
}

{
	// 	// ラムダのcurryをテストしてみる
	// 	const test = R.curry((number, name) => console.log(number, name));
	// 	// こんな感じで実行できる
	// 	test(30)('fkoji');
	// 	test(31, 'hoge');
	// 	// 部分適用させる
	// 	const cmonName = test(32);
	// 	cmonName('huga');
}

{
	// ラムダのpipe, composeをテストしてみる
	const sayHello = () => "Hello!";
	const giveName = name => `My name is ${name}.`;
	const greet = () => 'Nice to meet you!';
	const favorite = (favSubject, favThing) => `My favorite ${favSubject} is ${favThing}!`;
	const joinStr = (...str) => str.join(' ');
	const greeting = (name, favSubject, favThing) => {
		return joinStr(sayHello(), giveName(name), greet(), favorite(favSubject, favThing));
	}
	const logger = msg => console.log(msg);


	// Helloというだけ
	R.pipe(sayHello, logger)();

	// gretting関数をLogする
	const greetingLogger = R.pipe(greeting, logger);
	greetingLogger('test', 'test', 'test');

	// R.compose(logger, sayHello);
}