// 花柄を描く

precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;

float drawCircle(vec2 point, float size) {
    return size / length(point);
}

void main(void){
	vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y); // 正規化
    vec2 q = mod(p, 0.2) - 0.1;
    float baseSize = 0.1;
    float f1 = drawCircle(q + sin(u_time + 0.1) * cos(u_time + 0.1) * baseSize, baseSize * abs(sin(u_time * 0.5)));

    gl_FragColor = vec4(vec3(f1), 1.0);
}