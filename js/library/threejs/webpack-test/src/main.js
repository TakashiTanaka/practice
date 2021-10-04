// インテリセンスを有効化
import * as THREE from 'three';
// 色々外部ファイル化しているようで、使用したい場合読み込まないとだめ
import * as SceneUtils from 'three/examples/jsm/utils/SceneUtils.js';

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

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	render();


	// https://threejsfundamentals.org/threejs/lessons/ja/threejs-custom-buffergeometry.html
	// case9をもっといい感じに書く方法
	// 立方体を作る
	// 重複しているデータを消す。トータルで24個の点となる
	const vertices = [
		// front
		{ pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 0], }, // 0
		{ pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0], }, // 1
		{ pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1], }, // 2
		{ pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 1], }, // 3
		// right
		{ pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 0], }, // 4
		{ pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0], }, // 5
		{ pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1], }, // 6
		{ pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 1], }, // 7,
		// back
		{ pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 0], }, // 8 
		{ pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0], }, // 9
		{ pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1], }, // 10
		{ pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 1], }, // 11
		// left
		{ pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 0], }, // 12
		{ pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0], }, // 13
		{ pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1], }, // 14
		{ pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 1], }, // 15
		// top
		{ pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 0], }, // 16
		{ pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0], }, // 17
		{ pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1], }, // 18
		{ pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 1], }, // 19,
		// bottom
		{ pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 0], }, // 20
		{ pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0], }, // 21
		{ pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1], }, // 22
		{ pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 1], }, // 23
	];

	// 上記の配列を3つの並列な配列に変換する
	const positions = [];
	const normals = [];
	const uvs = [];
	for (const vertex of vertices) {
		positions.push(...vertex.pos);
		normals.push(...vertex.norm);
		uvs.push(...vertex.uv);
	}

	const geom = new THREE.BufferGeometry();
	const positionNumComponents = 3;
	const normalNumComponents = 3;
	const uvNumComponents = 2;
	geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
	geom.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
	geom.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));

	// 頂点を共有している箇所があるので、setIndexで36個のvertexを指定する
	geom.setIndex([
		0, 1, 2, 2, 1, 3, // front
		4, 5, 6, 6, 5, 7, // right
		8, 9, 10, 10, 9, 11, // back
		12, 13, 14, 14, 13, 15, // left
		16, 17, 18, 18, 17, 19, // top
		20, 21, 22, 22, 21, 23, // bottom
	]);

	const material = [
		new THREE.MeshLambertMaterial({
			opacity: 0.6, color: 0x44ff44, transparent: true
		}),
		new THREE.MeshBasicMaterial({
			color: 0x000000, wireframe: true
		})];
	let cube = new SceneUtils.createMultiMaterialObject(geom, material);
	scene.add(cube);
	cube.position.x = -30 + Math.round((Math.random() * planeGeometry.parameters.width));
	cube.position.z = -20 + Math.round((Math.random() * planeGeometry.parameters.height));
	cube.position.y = 1;


	function render() {
		stats.update();

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
