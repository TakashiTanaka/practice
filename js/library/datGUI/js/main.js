'use strict';

let myBox;

function MyBox() {
	this.w = 100;
	this.h = 100;
	this.d = 100;
	this.strokeColor = '#ffffff';
	this.fillColor = [0, 0, 0];
	this.hasBorder = true;
	this.getInfo = function () {
		alert(JSON.stringify(this));
	}
}

function setup() {
	let gui;
	let sizeFolder;

	createCanvas(500, 500, WEBGL);
	myBox = new MyBox();

	// dat.GUIオブジェクトのインスタンスを作成
	gui = new dat.GUI();

	// フォルダを作成、引数はフォルダ名
	sizeFolder = gui.addFolder('Size');

	// パネルを作成
	// .stepで刻み値指定、.maxで最大値を指定、.minで最小値を指定
	// また、最大値と最小値を指定した場合は自動的にスライダーになる
	// gui.add(myBox, 'w').step(10).max(200);

	// 刻み値、最大値、最小値はまとめて指定することも可能
	// gui.add(myBox, 'w', 50, 200, 10);

	// []で囲んで値を設定するとセレクトボックスになる
	// gui.add(myBox, 'w', [100, 200, 300]);

	// {}で囲んで、キーと値を設定すると、ラベルのついたセレクトボックスになる
	// gui.add(myBox, 'w', { small: 100, medium: 200, large: 300 });

	// イベントを設定できる
	// onChangeは値が変化した時におきるイベント
	// onFinishChangeは値の変化が終わった時に起こるイベント
	sizeFolder.add(myBox, 'w', 10, 100).onChange(
		function () {
			console.log(myBox.w);
		}
	);
	sizeFolder.add(myBox, 'h', 50, 200).onFinishChange(
		() => {
			console.log(myBox.h);
		}
	);
	sizeFolder.add(myBox, 'd', 10, 300);

	// addColorでカラーピッカーを作れる
	gui.addColor(myBox, 'strokeColor');
	gui.addColor(myBox, 'fillColor');

	// addでチェックボックスを作る
	gui.add(myBox, 'hasBorder');

	// 引数にメソッドを渡すと、クリックした際に起きるイベントを設定できる
	gui.add(myBox, 'getInfo');

	// フォルダをデフォルトで開いておきたい場合は.openとする
	sizeFolder.open();
}

function draw() {
	background(180);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	if (myBox.hasBorder) {
		stroke(myBox.strokeColor);
	} else {
		noStroke();
	}
	fill(myBox.fillColor);
	box(myBox.w, myBox.h, myBox.d);
}