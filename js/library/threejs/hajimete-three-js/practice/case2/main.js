function init() {
	let scene = new THREE.Scene();
	let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	let renderer = new THREE.WebGLRenderer();
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

	renderer.render(scene, camera);

}
window.onload = init

