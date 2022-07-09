#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time; // 経過時間
uniform vec2 u_resolution; // 解像度

void main() {
	// xy座標を解像度で割った値（正規化した値）
	vec2 st = gl_FragCoord.xy / u_resolution;
	gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
}
