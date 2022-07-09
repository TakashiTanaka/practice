#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform float u_time; // 経過時間
uniform vec2 u_resolution; // 解像度
uniform vec2 u_mouse; // マウスの座標

float plot(vec2 st , float pct) {
	return smoothstep(pct - 0.02, pct, st.y) - smoothstep(pct, pct + 0.02, st.y);
}

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution; // 座標の正規化

	float y = sin(st.x * PI * 2.0) / 2.0 + 0.5;

	vec3 color = vec3(y); // vec3型のcolor変数に引数にyを与えたvec3型の値を代入（値を1つだけ渡すと3つの色のチャンネルに同じ値を割り当てようとする）

	float pct = plot(st, y); // plot関数に正規化した座標を渡し、マッピングされた値を受け取り代入

	vec3 green = vec3(0.0, 1.0, 0.0); // 緑色

	color = pct * green;

	gl_FragColor = vec4(color, 1.0);
}

