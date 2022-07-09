#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

// 課題2「同じコードを元に step() の代わりに smoothstep() を使ってみましょう。値を調節するとぼやけた境界線からスムーズな枠線まで変化させることができます。」
void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // bottom-left
    float bottom = smoothstep(0.0, 0.1, st.y);
    float left = smoothstep(0.0, 0.1, st.x);
    float top = smoothstep(0.0, 0.1, 1.0 - st.y);
    float right = smoothstep(0.0, 0.1, 1.0 - st.x);

    // color = vec3(bl.x * bl.y * tr.x * tr.y);
    color = vec3(bottom * left * top * right);

    gl_FragColor = vec4(color,1.0);
}
