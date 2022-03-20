// GSAPを読み込み
import { gsap } from 'gsap';

// ScrollTriggerを読み込み
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ScrollTriggerを登録
gsap.registerPlugin(ScrollTrigger);

// すべてのsection要素を取得して処理
document.querySelectorAll('section').forEach(el => {
  /** @type {GSAPTimeline} - タイムライン */
  const tl = gsap.timeline({
    toggleActions: 'play none none none',
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
    },
  });

  // sectionの子要素に対して、アニメーションを定義
  tl.from(el.children, {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: {
      each: 0.5,
    },
  });
});
