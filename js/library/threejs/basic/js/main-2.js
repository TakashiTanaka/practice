// let THREE = require('three');

(function () {
	'use strict';

	let scene;
	let box;
	let sphere1;
	let sphere2;
	let sphere3;
	let plane;
	let light;
	let ambient;
	let camera;
	let gridHelper;
	let axisHelper;
	let lightHelper;
	let renderer;
	let width = 500;
	let height = 250;
	let controls;

	scene = new THREE.Scene();

	box = new THREE.Mesh(
		new THREE.BoxGeometry(100, 100, 100),
		new THREE.MeshLambertMaterial({
			color: new THREE.Color(0xff0000)
		})
	);
	box.position.set(0, 0, 0);
	scene.add(box);

	sphere1 = new THREE.Mesh(
		new THREE.SphereGeometry(50, 20, 20),
		new THREE.MeshBasicMaterial({
			color: 0x4caf50
		})
	);
	sphere1.position.set(100, 0, -150);
	scene.add(sphere1);

	sphere2 = new THREE.Mesh(
		new THREE.SphereGeometry(50, 20, 20),
		new THREE.MeshLambertMaterial({
			color: 0x4caf50
		})
	);
	sphere2.position.set(100, 0, 0);
	scene.add(sphere2);

	sphere3 = new THREE.Mesh(
		new THREE.SphereGeometry(50, 20, 20),
		new THREE.MeshPhongMaterial({
			color: 0x4caf50,
			// wireframe: true
		})
	);
	sphere3.position.set(100, 0, 150);
	scene.add(sphere3);

	plane = new THREE.Mesh(
		new THREE.PlaneGeometry(200, 200),
		new THREE.MeshLambertMaterial({
			color: 0x0096d6,
			side: THREE.DoubleSide
		})
	);
	plane.position.set(0, -50, 0);
	plane.rotation.x = 90 * Math.PI / 180;
	scene.add(plane);

	light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(0, 100, 30);
	scene.add(light);

	ambient = new THREE.AmbientLight(0x404040);
	ambient.position.set(0, 100, 30);
	scene.add(ambient);

	camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
	camera.position.set(200, 100, 300);
	camera.lookAt(scene.position);

	gridHelper = new THREE.GridHelper(500, 10);
	scene.add(gridHelper);
	axisHelper = new THREE.AxisHelper(1000);
	scene.add(axisHelper);
	lightHelper = new THREE.DirectionalLightHelper(light, 20);
	scene.add(lightHelper);

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
	render();
})();
