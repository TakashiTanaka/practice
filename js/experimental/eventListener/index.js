const test = document.getElementById('test');

// let testE = test.addEventListener('click', e => {
// 	e.target.removeEventListener(e.type, testE);
// 	// console.log(e.target);
// 	console.log(e);
// }, false);

function say(e) {
	console.log(this);
	e.currentTarget.removeEventListener('click', this.handleEvent, false);
}

// test.addEventListener('click', e => {
// 	e.target.removeEventListener(e.type, testE);
// 	// console.log(e.target);
// 	console.log(e);
// }, false);

// test.addEventListener('click', { name: 'tom', handleEvent: say }, false);


// 一度だけ実行する場合
// const sayHey = () => console.log('hey');
// test.addEventListener('click', sayHey, { once: true });

// 実行する関数にremoveEventListerを仕込んだ場合
// const sayHeyAndDelete = () => {
// 	console.log('hey');
// 	test.removeEventListener('click', sayHeyAndDelete);
// }
// test.addEventListener('click', sayHeyAndDelete);

// 実行する関数にremoveEventListerとaddEventListerを仕込んだ場合
// この場合、何度でも実行できる
// でもこれだったらonce: trueで良い
// const sayHeyAndDeleteAndSet = () => {
// 	console.log('hey');
// 	test.removeEventListener('click', sayHeyAndDeleteAndSet);
// 	test.addEventListener('click', sayHeyAndDeleteAndSet);
// }
// test.addEventListener('click', sayHeyAndDeleteAndSet);



const sayHey = e => {
	console.log(e);
	console.log(this);
	console.log(e.target);
	console.log(e.currentTarget);
	console.log(this.val1)
	console.log(this.self)
}

// function sayHey(e) {
// 	console.log(e);
// 	console.log(this);
// 	console.log(e.currentTarget);
// 	console.log(this.val1)
// }


// const eventObj = {
// 	eventHandler(msg) {
// 		console.log(msg);
// 	},
// }

test.addEventListener('click', {
	val1: 'test',
	self: this,
	handleEvent: sayHey
});
// test.addEventListener('click', () => sayHey('hey'));



const setHoverEvent = (el, mouseOverEvent, mouseLeaveEvent) => {
	el.addEventListener('mouseover', mouseOverEvent);
	el.addEventListener('mouseleave', mouseLeaveEvent);
};