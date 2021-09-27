function init() {
	// シーン
	// 表示したいすべての物体と利用したい全ての光源などを保持して変更を監視するコンテナオブジェクト
	let scene = new THREE.Scene();

	// カメラ
	// シーンを描画するときに何が見えるかを決定する
	let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	// cameraの角度に基づいて、ブラウザ内でシーンがどのように見えるのか計算
	// ここではWEBGLRendererを使っている
	let renderer = new THREE.WebGLRenderer();

	// rendererの背景色とサイズをセット
	renderer.setClearColor(new THREE.Color(0xEEEEEE));
	renderer.setSize(window.innerWidth, window.innerHeight);

	// デバッグ用のaxesを追加
	let axes = new THREE.AxisHelper(20);
	scene.add(axes);

	// 平面を生成
	let planeGeometry = new THREE.PlaneGeometry(60, 20); // 幅と高さを定義
	let planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc }); // マテリアルを定義
	let plane = new THREE.Mesh(planeGeometry, planeMaterial); // メッシュオブジェクトにする

	plane.rotation.x = -0.5 * Math.PI; // x軸周りに90度回転
	plane.position.x = 15;
	plane.position.y = 0;
	plane.position.z = 0;

	scene.add(plane); // 平面をシーンに追加

	let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	let cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
	let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.position.x = -4;
	cube.position.y = 3;
	cube.position.z = 0;

	scene.add(cube);

	let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
	let sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true });
	let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

	sphere.position.x = 20;
	sphere.position.y = 4;
	sphere.position.z = 2;

	scene.add(sphere);

	// カメラの位置を定義
	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 20;
	camera.lookAt(scene.position); // lookAtでシーンの中心を向くように設定

	// レンダラの出力をwebGL-outputに渡す
	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	// レンダラにカメラオブジェクトを渡し、シーンを描画するように支持
	renderer.render(scene, camera);

}

// ロード時にinit関数を実行
window.onload = init

