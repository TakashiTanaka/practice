// 花柄を描く
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
	vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y); // 正規化
	// vec3 destColor = vec3(1.0, 0.3, 0.7);
	vec3 destColor = vec3(0.0, 0.0, 0.3);
	float f = 0.0;
	float f2 = 0.0;
	float f3 = 0.0;
	for(float i = 0.0; i < 3.0; i++) {
		float s1 = sin(u_time + (i + 5.0) * mod(p.x + cos(u_time * 0.1 + i), p.y + cos(u_time * 0.1 + i)) * 0.628318) * 0.6;
		float c1 = cos(u_time + (i + 5.0) * mod(p.x + sin(u_time * 0.1 + i), p.y + sin(u_time * 0.1 + i)) * 0.628318) * 0.6;
		float s2 = sin(u_time + (i + 5.0) * mod(p.x + cos(u_time * 0.11 + i), p.y + cos(u_time * 0.11 + i)) * 0.628318) * 0.6;
		float c2 = cos(u_time + (i + 5.0) * mod(p.x + sin(u_time * 0.11 + i), p.y + sin(u_time * 0.11 + i)) * 0.628318) * 0.6;
		float s3 = sin(u_time + (i + 5.0) * mod(p.x + cos(u_time * 0.12 + i), p.y + cos(u_time * 0.12+ i)) * 0.628318) * 0.6;
		float c3 = cos(u_time + (i + 5.0) * mod(p.x + sin(u_time * 0.12 + i), p.y + sin(u_time * 0.12+ i)) * 0.628318) * 0.6;
		f += 0.05 / abs(length(p + vec2(c1, s1)) - 0.5);
		f2 += 0.05 / abs(length(p + vec2(c2, s2)) - 0.5);
		f3 += 0.05 / abs(length(p + vec2(c3, s3)) - 0.5);
	}

	// destColor = mix(destColor, vec3(f * 0.1, 0.0, abs(sin(u_time * 0.1) - 0.5)), 0.5);
	// destColor = mix(destColor, vec3(0.0, abs(sin(u_time * 0.5) - 0.5), f3 * 0.1), 0.5);
	// destColor = mix(destColor, vec3(abs(sin(u_time * 0.3) - 0.5), f2 * 0.1, 0.0), 0.5);

	// gl_FragColor = vec4(destColor + vec3(f,f2,f3), 1.0);


	vec3 r = vec3(f * 0.9, 0.0, 0.0);
	vec3 g = vec3(0.0, f2 * 0.9, 0.0);
	vec3 b = vec3(0.0, 0.0, f3 * 0.9);
	gl_FragColor = vec4(destColor + r + g + b, 1.0);
}
