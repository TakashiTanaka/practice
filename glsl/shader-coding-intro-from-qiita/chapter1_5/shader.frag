precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
	vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y); // 正規化
	st += vec2(cos(u_time * 5.0), sin(u_time)) * 0.5;
	float l = 0.1 / length(st); // lengthは距離を測る関数
	// float l = 0.1 * abs(sin(u_time)) / length(st);
	gl_FragColor = vec4(vec3(l), 1.0);
}
