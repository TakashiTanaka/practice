#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

// 課題5 長方形を塗りつぶすのではなく、枠線だけを描く関数を作ってください。
// わからん

// 四角を描く関数
vec3 drawRect(vec2 pos, vec2 size, float strokeWeight, vec2 st) {
    float bottom = smoothstep(0.0, 1.0 - size.y - pos.y, st.y);
    float left = ceil(smoothstep(pos.x, strokeWeight / 2.0 + pos.x, st.x) - smoothstep(strokeWeight / 2.0 + pos.x, strokeWeight + pos.x, st.x));
    float top = ceil(smoothstep(pos.y, strokeWeight / 2.0 + pos.y, 1.0 - st.y) - smoothstep(strokeWeight / 2.0 + pos.y, strokeWeight + pos.y, 1.0 - st.y));
    // float top = smoothstep(0.0, pos.y, 1.0 - st.y);
    float right = smoothstep(0.0, 1.0 - size.x - pos.x, 1.0 - st.x);
		return vec3(left * top * right * bottom);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    color = drawRect(vec2(0.1, 0.1), vec2(0.5, 0.5), 0.1, st);

    gl_FragColor = vec4(color,1.0);
}
