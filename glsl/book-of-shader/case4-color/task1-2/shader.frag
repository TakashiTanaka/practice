#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// blue
vec3 blue = vec3(0.149,0.141,0.912);
vec3 red = vec3(1.000,0.233,0.524);
vec3 white = vec3(1.000,1.000,1.000);
vec3 darkBlue = vec3(0.0,0.0,0.3);
vec3 yellow = vec3(1.0,0.8,0.0);

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

float twice(float num) {
  return num * 2.0;
}


// 課題1 ウィリアム・ターナーの夕日のようなグラデーションを作り出してみましょう。
void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec3 pct = vec3(st.y);

    // for文と三項演算子が使えることがわかった
    // JavaScriptとかで使える、剰余の計算の演算子、%は使えない。代わりにmod関数を使う
    for(float i = 0.0; i < 10.0; i++) {
      color = 
        mix(mod(i, 2.0) == 0.0 
        ? vec3(1.0, abs(sin(u_time * 0.3 + i)), 0.5) 
        : vec3(abs(sin(u_time * 0.5)), 0.5, 1.0), 
        color, 
        smoothstep(twice(0.9 - .1 * i), twice(1.0 - .1 * i), st.y + cos((st.x + st.y) * 30.0) * abs(sin((u_time + st.y + st.x) * (0.3 * i))) * 0.6));
    }
    // color = mix(yellow, color, smoothstep(twice(0.4), twice(0.5), st.y));
    // color = mix(red, color, smoothstep(twice(0.3), twice(0.4), st.y));
    // color = mix(yellow, color, smoothstep(twice(0.2), twice(0.3), st.y));
    // color = mix(red, color, smoothstep(twice(0.1), twice(0.2), st.y));
    // color = mix(yellow, color, smoothstep(twice(0.0), twice(0.1), st.y));

    gl_FragColor = vec4(color,1.0);
}