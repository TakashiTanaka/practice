#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

// 課題3 floor() を使ってみましょう。
void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // bottom-left
    float bottom = smoothstep(0.0, 0.1, st.y);
    float left = smoothstep(0.0, 0.1, st.x);
    float top = smoothstep(0.0, 0.1, 1.0 - st.y);
    float right = smoothstep(0.0, 0.1, 1.0 - st.x);

		// floorを使うとぼやかした正方形がくっきりと表示された
    color = vec3(floor(bottom * left * top * right));

    gl_FragColor = vec4(color,1.0);
}
