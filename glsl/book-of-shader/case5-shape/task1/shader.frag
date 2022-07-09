#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

// 課題1「長方形の大きさと縦横比を変えてみましょう。」
void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // bottom-left
    vec2 bl = step(vec2(0.1),st);
    bl.x = step(0.3, st.x);

    // top-right
    vec2 tr = step(vec2(0.1),1.0-st);
    tr.x = step(0.3, 1.0 - st.x);
		
    color = vec3(bl.x * bl.y * tr.x * tr.y);

    gl_FragColor = vec4(color,1.0);
}