// インテリセンスを有効化
// import * as THREE from '@types/three';

function init() {
	let stats = initStats();
	let scene = new THREE.Scene();
	scene.fog = new THREE.Fog(0xffffff, 0.015, 100);

	// overrideMaterialによって全てのオブジェクトのマテリアルを上書きした
	scene.overrideMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });

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

	let step = 0;

	let controls = new function () {
		// 回転速度
		this.rotationSpeed = 0.02;

		// シーン内のオブジェクトの数
		this.numberOfObjects = scene.children.length;

		// 立方体を削除する関数
		this.removeCube = () => {
			let allChildren = scene.children;
			let lastObject = allChildren[allChildren.length - 1];
			// 関数が実行され、lastObjectがTHREE.Meshオブジェクトだったら削除
			if (lastObject instanceof THREE.Mesh) {
				scene.remove(lastObject);
				this.numberOfObjects = scene.children.length;
			}
		}

		// 立方体を追加する関数
		this.addCube = () => {
			let cubeSize = Math.ceil((Math.random() * 3));
			let cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
			let cubeMaterial = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });
			let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
			cube.castShadow = true;
			// 追加する立方体に名前をつけて、管理しやすくする
			// THREE.Scene.getObjectByName()関数で取得できるようになる
			cube.name = "cube-" + scene.children.length;

			cube.position.x = -30 + Math.round((Math.random() * planeGeometry.parameters.width));
			cube.position.y = Math.round((Math.random() * 5));
			cube.position.z = -20 + Math.round((Math.random() * planeGeometry.parameters.height));

			scene.add(cube);
			this.numberOfObjects = scene.children.length;
		}

		// オブジェクトの情報をコンソールに表示する関数
		this.outputObjects = () => {
			console.log(scene.children);
		}
	}

	let gui = new dat.GUI();
	gui.add(controls, 'rotationSpeed', 0, 0.5);
	gui.add(controls, 'addCube');
	gui.add(controls, 'removeCube');
	gui.add(controls, 'outputObjects');
	gui.add(controls, 'numberOfObjects').listen();

	render();

	function render() {
		stats.update();

		scene.traverse(function (obj) {
			if (obj instanceof THREE.Mesh && obj != plane) {
				obj.rotation.x += controls.rotationSpeed;
				obj.rotation.y += controls.rotationSpeed;
				obj.rotation.z += controls.rotationSpeed;
			}
		});

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
