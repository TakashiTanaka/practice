import { gsap } from 'gsap';
gsap.to('#test1', { color: "#8c0", x: 200, duration: 2 });
gsap.to('#test2', { fontSize: 50, duration: 2 });
gsap.from('#test3', { fontSize: 50, opacity: 0, duration: 2 });
gsap.fromTo('#test4', { scaleY: 1, scaleX: 1, opacity: 0, duration: 2 }, { scaleY: 20, opacity: 1 });
gsap.to('#test5', { x: 500, duration: 1, ease: "bounce" });
gsap.from('.box', { opacity: 0, stagger: 0.1, duration: 2 });