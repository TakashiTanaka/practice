#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time; // 経過時間
uniform vec2 u_resolution; // 解像度
uniform vec2 u_mouse; // マウスの座標

vec3 colorA = vec3(0.149, 0.141, 0.912);
vec3 colorB = vec3(1.000, 0.833, 0.224);

void main() {
	vec3 color = vec3(0.0);

	float pct = abs(sin(u_time));

	// colorAとcolorBをmix関数で調合。パーセンテージは時間経過で変化させる
	color = mix(colorA, colorB, pct);

	gl_FragColor = vec4(color, 1.0);
}

