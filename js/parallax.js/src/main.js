import Parallax from 'parallax-js';

let scene = document.getElementById('scene');
new Parallax(scene, {
	relativeInput: true,
	hoverOnly: true
})
	.scalar(20, 20);