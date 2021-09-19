// let THREE = require('three');

(function () {
	'use strict';
	let scene;
	let text;
	let light;
	let ambient;
	let camera;
	let renderer;
	let width = 500;
	let height = 250;
	let controls;
	let loader;

	scene = new THREE.Scene();

	loader = new THREE.FontLoader();
	loader.load('js/helvetiker_regular.typeface.json', function (font) {
		createBox(font);
		render();
	});

	function createBox(font) {
		text = new THREE.Mesh(
			new THREE.TextGeometry('Hey!', {
				font: font,
				size: 24,
				height: 4
			}),
			new THREE.MeshBasicMaterial({ color: 0xf39800, side: THREE.DoubleSide })
		);
		text.position.set(-80, 0, 0);
		scene.add(text);
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
