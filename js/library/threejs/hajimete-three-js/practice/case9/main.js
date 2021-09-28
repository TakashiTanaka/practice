// インテリセンスを有効化
// import * as THREE from '@types/three';

function init() {
	let stats = initStats();
	let scene = new THREE.Scene();
	let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	scene.add(camera);

	renderer = new THREE.WebGLRenderer();
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

	// 手作業でジオメトリを作成
	// 本に掲載されている方法は（Geometryを使った方法）は125未満のバージョンのようだった
	// 下記は試したが、動作しなかった

	// =============================================

	// 頂点を定義
	// let vertices = [
	// 	new THREE.Vector3(1, 3, 1),
	// 	new THREE.Vector3(1, 3, -1),
	// 	new THREE.Vector3(1, -1, 1),
	// 	new THREE.Vector3(1, -1, -1),
	// 	new THREE.Vector3(-1, 3, -1),
	// 	new THREE.Vector3(-1, 3, 1),
	// 	new THREE.Vector3(-1, -1, -1),
	// 	new THREE.Vector3(-1, -1, 1),
	// ];

	// let faces = [
	// 	new THREE.Face3(0, 2, 1),
	// 	new THREE.Face3(2, 3, 1),
	// 	new THREE.Face3(4, 6, 5),
	// 	new THREE.Face3(6, 7, 5),
	// 	new THREE.Face3(4, 5, 1),
	// 	new THREE.Face3(5, 0, 1),
	// 	new THREE.Face3(7, 6, 2),
	// 	new THREE.Face3(6, 3, 2),
	// 	new THREE.Face3(5, 7, 0),
	// 	new THREE.Face3(7, 2, 0),
	// 	new THREE.Face3(1, 3, 4),
	// 	new THREE.Face3(3, 6, 4),
	// ];

	// let geom = new THREE.BufferGeometry();
	// geom.vertices = vertices;
	// geom.faces = faces;
	// geom.computedFaceNormals();

	// scene.add(geom);

	// =============================================


	// なので、https://threejsfundamentals.org/threejs/lessons/ja/threejs-custom-buffergeometry.html
	// に載っている方法を試してみる
	// ちなみにこれは良い方法ではないっぽいけど、確かめるためにやる

	// 立方体を作る
	// 1つの面につき2つの三角形、1つの三角形につき3つのvertex、これが6面あるので、36このvertexが必要
	const vertices = [
		// front
		{ pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 0], },
		{ pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0], },
		{ pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1], },

		{ pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1], },
		{ pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0], },
		{ pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 1], },
		// right
		{ pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 0], },
		{ pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0], },
		{ pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1], },

		{ pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1], },
		{ pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0], },
		{ pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 1], },
		// back
		{ pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 0], },
		{ pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0], },
		{ pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1], },

		{ pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1], },
		{ pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0], },
		{ pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 1], },
		// left
		{ pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 0], },
		{ pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0], },
		{ pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1], },

		{ pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1], },
		{ pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0], },
		{ pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 1], },
		// top
		{ pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 0], },
		{ pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0], },
		{ pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1], },

		{ pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1], },
		{ pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0], },
		{ pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 1], },
		// bottom
		{ pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 0], },
		{ pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0], },
		{ pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1], },

		{ pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1], },
		{ pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0], },
		{ pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 1], },
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

	// BufferAttributeを作ってBufferGeometryに指定する
	// setAttributeのposition, normal, uvはthree.jsで決められている名前なので気をつける（カスタムシェーダーは別）
	// BufferAttributeはネイティブの配列ではなく、FLoat32Array型でなくてはならない
	// BufferAttributeの第2引数は1つのvertexに対して幾つの要素が必要か指定している
	// positionやnormalsは3次元なので3,uvは2次元なので2
	const geom = new THREE.BufferGeometry();
	const positionNumComponents = 3;
	const normalNumComponents = 3;
	const uvNumComponents = 2;
	geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
	geom.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
	geom.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));

	function makeInstance(geometry, x) {
		const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		cube.position.x = x;
		cube.position.y = 1;
		return cube;
	}

	for (let i = 0; i < 10; i++) {
		makeInstance(geom, i * 3);
	};

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
