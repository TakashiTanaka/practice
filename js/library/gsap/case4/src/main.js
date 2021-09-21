import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll("section").forEach(el => {

	const tl = gsap.timeline({
		toggleActions: 'play none none none',
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
		},
	});

	tl
		.from(el.children, {
			y: 100,
			opacity: 0,
			duration: 1,
			stagger: {
				each: 0.1,
			},
		})
});

