// let THREE = require('three');

(function () {
	'use strict';
	let scene;
	let box;
	let light;
	let ambient;
	let camera;
	let renderer;
	let width = 500;
	let height = 250;
	let controls;
	let loader;

	scene = new THREE.Scene();

	loader = new THREE.TextureLoader();
	loader.load('img/logo.png', function (texture) {
		createBox(texture);
		render();
	});

	function createBox(texture) {
		box = new THREE.Mesh(
			new THREE.BoxGeometry(50, 50, 50),
			new THREE.MeshBasicMaterial({
				map: texture
			})
		);
		box.position.set(0, 0, 0);
		scene.add(box);
	}


	light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(0, 100, 30);
	scene.add(light);

	ambient = new THREE.AmbientLight(0x404040);
	ambient.position.set(0, 100, 30);
	scene.add(ambient);

	camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
	camera.position.set(200, 100, 300);
	camera.lookAt(scene.position);

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(width, height);
	renderer.setClearColor(0xefefef);
	renderer.setPixelRatio(window.devicePixelRatio);
	document.getElementById('stage').appendChild(renderer.domElement);

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	function render() {
		requestAnimationFrame(render);
		controls.update();
		renderer.render(scene, camera);
	}
})();
