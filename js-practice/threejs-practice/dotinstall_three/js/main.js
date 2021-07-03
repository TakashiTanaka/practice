(function () {
	'use strict';

	let scene;
	let box;
	let camera;
	let renderer;
	let width = 500;
	let heigth = 250;

	scene = new THREE.Scene();

	box = new THREE.Mesh(
		new THREE.BoxGeometry(50, 50, 50),
		new THREE.MeshLambertMaterial({ color: 0xff0000 })
	);
	box.position.set(0, 0, 0);
	scene.add(box);

	camera = new THREE.
})();
