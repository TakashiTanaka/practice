// インテリセンスを有効化
import * as THREE from 'three';

// メッシュを作るにはジオメトリとマテリアルが必要

function init() {
	let stats = initStats();
	let scene = new THREE.Scene();
	let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	scene.add(camera);

	let renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(new THREE.Color(0xEEEEEE));
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;

	let planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
	let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
	let plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.receiveShadow = true;

	plane.rotation.x = -0.5 * Math.PI;
	plane.position.x = 0;
	plane.position.y = 0;
	plane.position.z = 0;

	scene.add(plane);

	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 20;
	camera.lookAt(scene.position);

	// アンビエントライトを追加
	let ambientLight = new THREE.AmbientLight(0x0c0c0c);
	scene.add(ambientLight);

	// スポットライトを追加
	let spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(-20, 30, -5);
	spotLight.castShadow = true;
	scene.add(spotLight);

	// boxジオメトリを追加
	let cubeGeo = new THREE.BoxGeometry(1, 1, 1);
	let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
	let cube = new THREE.Mesh(cubeGeo, cubeMaterial);

	// positionは親要素からの相対位置で指定する
	// cube.position.x = 0;
	// cube.position.y = 1;
	// cube.position.z = 0;

	// このように指定することもできる上と同じ意味
	cube.position.set(0, 1, 0);

	// 角度もpositionと同じような感じで設定する
	cube.rotation.x = 0.8 * Math.PI;

	scene.add(cube);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	render();

	function render() {
		stats.update();
		// cube.rotation.x += 0.1;
		requestAnimationFrame(render);
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

window.onload = init;
