#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time; // 経過時間
uniform vec2 u_resolution; // 解像度
uniform vec2 u_mouse; // マウスの座標

// 線を描画する関数。引数にvec2型の値をとる
float plot(vec2 st) {
	/* 
	 * smoothstep関数は2つの数値からなる範囲ともう1つの値を受け取り、その範囲の中で0.0から1.0までの滑らかに変化する数値を返す
	 * 最初の2つの数値は値の変化の起こる範囲の始まりと終わりで、3つめのパラメーターはチェックの対象となる値
	 */
	return smoothstep(0.01, 0.0, abs(st.y - st.x));
}

// イメージとして、カンバス内のすべてのピクセルに対して、main関数内の処理を行われる感じ
void main() {
	vec2 st = gl_FragCoord.xy / u_resolution; // 座標の正規化

	float y = st.x; // 正規化したx座標をyにマッピング

	vec3 color = vec3(y); // vec3型のcolor変数に引数にyを与えたvec3型の値を代入（値を1つだけ渡すと3つの色のチャンネルに同じ値を割り当てようとする）

	float pct = plot(st); // plot関数に正規化した座標を渡し、マッピングされた値を受け取り代入

	vec3 green = vec3(0.0, 1.0, 0.0); // 緑色

	color = (1.0 - pct) * color + pct * green;

	gl_FragColor = vec4(color, 1.0);
}

