// 変数の静的型付け（JavaScriptは動的型付け、tsは静的型付け）

/*
型の種類
number
string
boolean
any
*/

// var i: number = 10;
// var i = 10; // 自動的にi: numberとなる

// var x; // var x: anyとなる

// var results: number[]; // 数値の配列


// 列挙型
// Signal

// enum Signal {
// 	Red = 0,
// 	Blue = 1,
// 	Yellow = 2
// }

// var result: Signal;

// Signal[2]; // Yellow


// 関数

// 返り値のない関数はvoidを指定する
// 引数の型をオプションにする場合は?をつける
// 初期値を設定したい場合は仮引数に=で設定する

// function add(a: number, b: number = 10): number {
// 	return a + b;
// }

// bをオプションにした場合
// function add(a: number, b?: number): number {
// 	if (b) {
// 		return a + b;
// 	} else {
// 		return a + a;
// 	}
// }

// console.log(add(5, 3));

// 関数式の場合
// var add = function (a: number, b: number): number {
// 	return a + b;
// }

// アロー関数の場合
// var add = (a: number, b: number): number => a + b;

// console.log(add(5, 3));

// 関数のオーバーロード
// function add(a: number, b: number): number; // シグネチャと呼ぶ
// function add(a: string, b: string): string;

// 引数の型によって処理を振り分ける
// function add(a: any, b: any): any {
// 	if (typeof a === 'string' && typeof b === "string") {
// 		return a + " " + b;
// 	}
// 	return a + b;
// }

// console.log(add(5, 3));
// console.log('Hello', 'World');
// 指定したシグネチャ以外の型を引数に渡すとエラーになる
// console.log('Hello', 3);

// クラス
// public, protected, private
// クラス自体に紐付いたメンバを「静的メンバ」という

// class User {
// name: string;
// constructor(name: string) {
// 	this.name = name;
// }
// constructor(protected _name: string) { // private, protectedなプロパティには慣習的に_をつける事が多い
// User.count++;
// } // 上の書き方を簡略化したパターン
// public sayHi(): void {
// 	console.log("hi! i am " + this.name);
// }
// プロパティを取得するためのゲッター
// get name() {
// 	return this._name;
// }
// プロパティを設定するためのセッター
// set name(newValue: string) {
// 	this._name = newValue;
// }
// 静的プロパティ
// static count: number = 0;
// 静的メソッド
// 	static showDescription(): void {
// 		console.log('this class is about users');
// 	}
// }

// var tom = new User("Tom");
// var bob = new User("Bob");
// console.log(User.count);
// User.showDescription();


// var tom = new User("Tom");
// console.log(tom.name);
// tom.name = "TOM";
// console.log(tom.name);
// tom.sayHi();

// class AdminUser extends User {
// 	private _age: number;
// 	constructor(_name: string, _age: number) {
// 		super(_name);
// 		this._age = _age;
// 	}
// 	public sayHi(): void {
// 		console.log("my age: " + this._age);
// 		console.log("my name: " + this._name);
// 		super.sayHi();
// 	}
// }

// var bob = new AdminUser("Bob", 23);
// bob.sayHi();


// Interface
// クラスとは異なり、インターフェイスは複数のインターフェイスから継承できる

// interface Result {
// 	a: number;
// 	b: number;
// }

// interface SpringResult {
// 	a: number;
// }

// interface FallResult {
// 	b: number;
// }

// interface FinalResult extends SpringResult, FallResult {
// 	final?: number; // オプションをつけることもできる
// }

// function getTotal(result: FinalResult) {
// 	return result.a + result.b + result.final;
// }

// function getTotal(result: FinalResult) {
// 	if (result.final) {
// 		return result.a + result.b + result.final;
// 	}
// 	return result.a + result.b;
// }

// var result = {
// 	a: 32,
// 	b: 45,
// 	final: 82
// };

// var result = {
// 	a: 32,
// 	b: 45,
// final: 82
// };

// console.log(getTotal(result));

// classとinterfaceを組み合わせて実装する

// interface GameUser {
// 	score: number;
// 	showScore(): void;
// }

// interfaceはカンマ区切りで複数のインターフェイスを実装することもできる
// class User implements GameUser {
// 	name: string;
// 	score: number = 0;
// 	constructor(name: string) {
// 		this.name = name;
// 	}
// 	sayHi(): void {
// 		console.log('Hi i am ' + this.name);
// 	}
// 	showScore(): void {
// 		console.log('Hi i am ' + this.score);
// 	}
// }

// Generics（抽象化されたデータ型）

// function getArray<T>(value: T): T[] {
// 	return [value, value, value];
// }

// console.log(getArray<number>(3));
// console.log(getArray<string>('hello'));

// interface Result {
// 	a: number;
// 	b: number;
// }

// class MyData<T extends Result> {
// 	constructor(public value: T) { }
// 	getArray(): T[] {
// 		return [this.value, this.value, this.value];
// 	}
// }

// var v1 = new MyData<Result>({ a: 32, b: 18 });
// console.log(v1.getArray());


// 内部モジュール

/// <reference path="./user.ts" />

// console.log(UserModule.name);
// import addr = UserModule.AddressModule;
// console.log(addr.zip);

// 外部モジュール