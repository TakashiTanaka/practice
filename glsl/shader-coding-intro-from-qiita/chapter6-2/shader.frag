// 輪を描く
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
	vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y); // 正規化
	// float f = floor(0.01 / abs(length(p) - 0.5));
	float strength = 0.5;
	// p += vec2(sin(u_time + p.x) * strength, cos(u_time + p.y) * strength);
	// float f = floor(0.5 / length(p)  * abs(sin(u_time + (sin(u_time * 0.3)))));
	// float f2 = floor(0.5 /length(p)  * abs(sin(u_time + (cos(sin(u_time) * 0.4)))));
	// float f3 = floor(0.5 / length(p)  * abs(sin(u_time + (sin(u_time * 0.5)))));
	// float f = floor(0.05 / abs(length(p) - (0.9 + 0.9 * sin(u_time * 0.1)) * abs(sin(u_time + p.y * p.x * (10.0 + 10.0 * sin(u_time * 0.1))))));
	// float f2 = floor(0.05 / abs(length(p) - (0.9 + 0.9 * sin(u_time * 0.1)) * abs(sin(u_time + p.y * p.x * (10.0 + 10.0 * sin(u_time * 0.2))))));
	// float f3 = floor(0.05 / abs(length(p) - 0.9 * abs(sin(u_time + p.y * p.x * (10.0 + 10.0 * sin(u_time * 0.3))))));
	// vec3 color = vec3(f, f2, f3);

	float f = 0.05 / abs(length(p) - 0.5);
	vec3 color = vec3(f);
	gl_FragColor = vec4(color, 1.0);
}
