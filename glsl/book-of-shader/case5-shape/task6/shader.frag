#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


// 課題6 どうすれば1つの描画領域の異なる位置に、複数の長方形を配置することができると思いますか。良い方法を考え出せたらモンドリアンの絵のようなパターンを作ってみせてください。
// 四角を描く関数を作成
vec3 drawRect(vec2 pos, vec2 size, vec3 color, vec2 st) {
    float bottom = smoothstep(0.0, 1.0 - size.y - pos.y, st.y);
    float left = smoothstep(0.0, pos.x, st.x);
    float top = smoothstep(0.0, pos.y, 1.0 - st.y);
    float right = smoothstep(0.0, 1.0 - size.x - pos.x, 1.0 - st.x);
    return vec3(floor(bottom * left * top * right)) * color;
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    vec3 color = 
			(drawRect(vec2(0.0, 0.0), vec2(0.3, 0.5), vec3(1.0, 0.0, 0.0), st) + 
			drawRect(vec2(0.2, 0.3), vec2(0.4, 0.6), vec3(0.0, 0.0, 1.0), st) + 
			drawRect(vec2(0.4, 0.1), vec2(0.5, 0.6), vec3(0.5, 0.8, 0.0), st));

    gl_FragColor = vec4(color,1.0);
}