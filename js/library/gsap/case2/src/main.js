import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	toggleActions: 'play none none none',
	scrollTrigger: {
		trigger: document.querySelector("section"),
		start: "top center"
	}
});

tl
	.from(".box--1", {
		y: 100,
		opacity: 0,
		duration: 1,
	})
	.from(".box--1 + p", {
		y: 100,
		opacity: 0,
		duration: 1,
	}, "<0.2");


// document.querySelectorAll("section").forEach(el => {
// 	gsap.from(el, {
// 		scrollTrigger: {
// 			trigger: el,
// 			toggleActions: "play pause resume resume",
// 		},
// 		y: 100,
// 		opacity: 0,
// 		duration: 1,
// 	});
// });