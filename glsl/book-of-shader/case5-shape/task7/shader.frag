#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time; // 経過時間
uniform vec2 u_resolution; // 解像度
uniform vec2 u_mouse; // マウスの座標

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution;
	float pct = 0.0;

	pct = distance(st, vec2(0.5));

	vec3 color = vec3(pct);

	gl_FragColor = vec4(color, 1.0);
}

