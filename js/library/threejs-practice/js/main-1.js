// let THREE = require('three');

(function () {
	'use strict';

	let scene;
	let person;
	let head;
	let body;
	let light;
	let ambient;
	let camera;
	let gridHelper;
	let axisHelper;
	let lightHelper;
	let renderer;
	let width = 500;
	let height = 250;
	let theta = 0;
	let controls;

	scene = new THREE.Scene();

	head = new THREE.Mesh(
		new THREE.BoxGeometry(20, 20, 20),
		new THREE.MeshLambertMaterial({
			// color: 0xff0000
			// color: '#00ff00'
			// color: 'rgb(122,32,48)'
			// color: 'hsl(100, 30%, 20%)'
			color: new THREE.Color(0xff0000)
		})
	);
	head.position.set(0, 40, 0);
	// head.scale.set(2, 1, 0.5);
	// head.scale.x = 2;
	// head.rotation.x = 45 * Math.PI / 180;
	// head.rotation.set(70 * Math.PI / 180, 0, 0);
	// scene.add(head);

	body = new THREE.Mesh(
		new THREE.BoxGeometry(40, 60, 40),
		new THREE.MeshLambertMaterial({
			// color: 0xff0000
			// color: '#00ff00'
			// color: 'rgb(122,32,48)'
			// color: 'hsl(100, 30%, 20%)'
			color: new THREE.Color(0xff0000)
		})
	);
	body.position.set(0, 0, 0);
	// body.scale.set(2, 1, 0.5);
	body.scale.x = 2;
	// body.rotation.x = 45 * Math.PI / 180;
	// body.rotation.set(70 * Math.PI / 180, 0, 0);
	// scene.add(body);
	person = new THREE.Group();
	person.add(head);
	person.add(body);
	scene.add(person);

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
	// controls.autoRotate = true;

	function render() {
		requestAnimationFrame(render);
		// theta += 0.1;
		// camera.position.x = Math.cos(THREE.Math.degToRad(theta)) * 300;
		// camera.position.z = Math.sin(THREE.Math.degToRad(theta)) * 300;
		// camera.lookAt(scene.position);
		// box.rotation.y += 0.01;
		controls.update();
		person.rotation.y += 0.01;
		renderer.render(scene, camera);
	}
	render();
})();
