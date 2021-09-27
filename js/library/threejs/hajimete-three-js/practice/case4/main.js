
// once everything is loaded, we run our Three.js stuff.
let scene;
let camera;
let renderer;

function init() {

	let stats = initStats();

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(new THREE.Color(0xEEEEEE));
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;

	let axes = new THREE.AxisHelper(20);
	scene.add(axes);

	let planeGeometry = new THREE.PlaneGeometry(60, 20);
	let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc });
	let plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.receiveShadow = true;

	plane.rotation.x = -0.5 * Math.PI;
	plane.position.x = 15;
	plane.position.y = 0;
	plane.position.z = 0;

	scene.add(plane);

	let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
	let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.castShadow = true;

	cube.position.x = -4;
	cube.position.y = 3;
	cube.position.z = 0;

	scene.add(cube);

	let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
	let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
	let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	sphere.castShadow = true;

	sphere.position.x = 20;
	sphere.position.y = 4;
	sphere.position.z = 2;

	scene.add(sphere);

	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 20;
	camera.lookAt(scene.position);

	let spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(-20, 30, -5);
	spotLight.castShadow = true;
	scene.add(spotLight);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	let step = 0;

	let controls = new function () {
		this.rotationSpeed = 0.02;
		this.bouncingSpeed = 0.03;
	};

	let gui = new dat.GUI();
	gui.add(controls, 'rotationSpeed', 0, 0.5);
	gui.add(controls, 'bouncingSpeed', 0, 0.5);

	renderScene();

	// ここはp5で言うところのfunction draw()みたいな感じ
	function renderScene() {
		stats.update();

		cube.rotation.x += controls.rotationSpeed;
		cube.rotation.y += controls.rotationSpeed;
		cube.rotation.z += controls.rotationSpeed;

		step += controls.bouncingSpeed;
		sphere.position.x = 20 + (10 * Math.cos(step));
		sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));
		requestAnimationFrame(renderScene);
		renderer.render(scene, camera);
	}

	function initStats() {
		let stats = new Stats();
		stats.setMode(0);
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.left = '0px';
		stats.domElement.style.top = '0px';
		document.getElementById("Stats-output").appendChild(stats.domElement);
		return stats;
	}

}
function onResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}


window.onload = init

window.addEventListener('resize', onResize, false);

