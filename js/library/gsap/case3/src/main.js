import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 初期状態
gsap.set(".box", { opacity: 0, y: 100 });

// batchで処理
ScrollTrigger.batch(".box", {
	onEnter: batch => gsap.to(batch, {
		opacity: 1,
		y: 0,
		stagger: { each: 0.01 },
		overwrite: true
	}),
});