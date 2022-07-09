// キラシールを行列に

precision mediump float;
uniform float u_time; // time
uniform vec2 u_resolution; // resolution

void main(void){
	vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y); // 正規化
	// vec2 q = mod(p, 0.2) - 0.1; // 画面を分割
	vec2 q = p; // 画面を分割
	float s = sin(u_time * 0.1); // サインのゆらぎ
	float c = cos(u_time * 0.1); // コサインのゆらぎ
	q *= mat2(c, s, -s, c); // 行列をベクトルに乗算
	// float v = 0.1 / abs(q.y) * abs(q.x);
	float v = abs(mod(fract(p.y * p.y + cos(u_time * 0.1 + sin(0.2 * u_time))), q.y / 2.0) + mod(fract(-p.y * p.y + sin(u_time * 0.1 + cos(0.2 * u_time))), q.y / 2.0));
	float r = v * abs(sin(u_time + 1.0) + 1.5);
	float g = v * abs(sin(u_time + 3.0) + 1.5);
	float b = v * abs(sin(u_time + 6.0) + 1.5);
	// float r = v * abs(sin(u_time * 1.0) + 1.5);
	// float g = v * abs(sin(u_time * 3.0) + 1.5);
	// float b = v * abs(sin(u_time * 6.0) + 1.5);
	gl_FragColor = vec4(r, g, b, 1.0);
	// gl_FragColor = vec4(vec3(v), 1.0);
}
