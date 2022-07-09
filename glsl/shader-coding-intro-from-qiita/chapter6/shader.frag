precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
	vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y); // 正規化
	vec3 destColor = vec3(0.0);
	for(float i = 0.0; i < 5.0; i++) {
		float j = i + 1.0;
		vec2 q = p + vec2(cos(u_time * j), sin(u_time * j)) * 0.5;
		// destColor += 0.05 / length(q + sin(sin(p.y * 10.0 + u_time) * cos(p.y * 10.0)));
		// destColor += 0.05 / length(q * sin(p.y * p.x + u_time));
		destColor += 0.05 / length(q);
	}
	gl_FragColor = vec4(destColor, 1.0);
}
