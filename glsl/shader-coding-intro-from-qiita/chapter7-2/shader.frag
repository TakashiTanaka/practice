// 花柄を描く

precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;

void main(void){
	vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y); // 正規化
    vec2 q = mod(p, 0.2) - 0.1;
    float f1 = 0.2 / abs(q.x) * abs(q.y);
    float f2 = 0.2 / abs(q.x) * abs(q.y);
    float f3 = 0.2 / abs(q.x) * abs(q.y);
    gl_FragColor = vec4(vec3(f1, f2, f3), 1.0);
}