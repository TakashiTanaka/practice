#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

// 課題4 課題の中から気に入ったコードを選び、それを関数に変えて再利用できるようにしましょう。効率的でフレキシブルな関数を考えましょう。
// 四角を描く関数を作成
vec3 drawRect(vec2 pos, vec2 size, vec2 st) {
    float bottom = smoothstep(0.0, 1.0 - size.y - pos.y, st.y);
    float left = smoothstep(0.0, pos.x, st.x);
    float top = smoothstep(0.0, pos.y, 1.0 - st.y);
    float right = smoothstep(0.0, 1.0 - size.x - pos.x, 1.0 - st.x);
		return vec3(floor(bottom * left * top * right));
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    color = drawRect(vec2(0.0, 0.0), vec2(0.5, 0.5), st);
    // color = vec3(drawRect(vec2(0.0, 0.0), vec2(0.3, 0.5), st) + drawRect(vec2(0.5, 0.5), vec2(0.1, 0.2), st));

    gl_FragColor = vec4(color,1.0);
}
