import { gsap } from 'gsap';
gsap.to('#test1', { color: "#8c0", x: 200, duration: 2 });
gsap.to('#test2', { fontSize: 50, duration: 2 });
gsap.from('#test3', { fontSize: 50, opacity: 0, duration: 2 });
gsap.fromTo('#test4', { scaleY: 1, scaleX: 1, opacity: 0, duration: 2 }, { scaleY: 20, opacity: 1 });
gsap.to('#test5', { x: 500, duration: 1, ease: "bounce" });
gsap.from('.box', { opacity: 0, stagger: 0.1, duration: 2 });
gsap.set('#test6', { x: 20, fontSize: 10, });

gsap.to("#test7", { duration: 1, x: 100, onComplete: tweenComplete });

function tweenComplete() {
	console.log("the tween is complete");
}

//タイムラインのインスタンスを作成する
let tl = gsap.timeline();

tl.add(gsap.to("#test8", { duration: 2, x: 100 }));
tl.to("#test9", { duration: 2, x: 100 });

// タイムラインはメソッドチェーンでつなげることができる

let tl2 = gsap.timeline();

tl2
	.to("#test10", { duration: 2, x: 100 })
	.to("#test11", { duration: .5, x: 100 })
	.to("#test12", { duration: 1, x: 500 });

// タイムラインはデフォルト値を設定することができる
let tl3 = gsap.timeline({ defaults: { duration: 2 } });

// また、デフォルト値をあるしーけんすで上書きすることもできる
tl3
	.to("#test13", { duration: 0.1, x: 100 })
	.to("#test14", { x: 100 })
	.to("#test15", { x: 500 });

//create a TimelineMax and make it repeat 3 times with 1 second between iterations
let tl4 = gsap.timeline({ repeat: 3, repeatDelay: 1 });

tl4.to("#box1", { duration: 1, x: 200 })
	//start 1 second after previous tween ends (gap)
	.to("#box2", { duration: 1, x: 200, scale: 0.2 }, "+=1")
	//add a label at the end
	.addLabel("greyAndPink")
	//start both of these animations at the same time, at the "greyAndPink" label.
	.to("#box3", { duration: 1, x: 200, scale: 2, y: 20 }, "greyAndPink")
	.to("#box4", { duration: 1, x: 200, rotation: 360 }, "greyAndPink");