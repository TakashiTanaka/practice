#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// blue
vec3 blue = vec3(0.149,0.141,0.912);
vec3 red = vec3(1.000,0.433,0.224);
vec3 white = vec3(1.000,1.000,1.000);
vec3 darkBlue = vec3(0.0,0.0,0.3);
vec3 yellow = vec3(1.0,0.8,0.0);

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}


// 課題1 ウィリアム・ターナーの夕日のようなグラデーションを作り出してみましょう。
void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    vec3 pct = vec3(st.y);

    // pct.r = smoothstep(0.0,1.0, st.x);
    // pct.g = sin(st.x*PI);
    // pct.b = pow(st.x,0.5);

    float slowTime = u_time * 0.3;
    float fastTime = u_time;
    float sin1 = sin(slowTime);
    float sin2 = sin(fastTime);
    float cos1 = cos(slowTime);
    float lines = 101.0;

    color = mix(darkBlue, blue, smoothstep(0.0, 1.0, st.y * sin((st.x - st.y) * PI * lines) * (4.0 + 4.0 * sin(u_time * 0.1)) * abs(sin(u_time * 0.1 - 1.0))));
    color = mix(color, white, smoothstep(0.0, 1.0, (1.0 - st.y) * sin(st.x * PI * lines) * (4.0 + 4.0 * sin(u_time * 0.5)) * abs(sin(u_time * 0.15 - 2.0))));
    color = mix(color, yellow, smoothstep(0.0, 1.0, (1.0 - st.x) * sin(st.y * PI * lines) * (4.0 + 4.0 * sin(u_time * 0.75)) * abs(sin(u_time * 0.2 - 3.0))));
    color = mix(color, red, smoothstep(0.0, 1.0, st.x * sin((st.y + st.x) * PI * lines) * (4.0 + 4.0 * sin(u_time)) * abs(sin(u_time * 0.25 - 4.0))));
    
    // color = mix(red, blue, smoothstep(0.0, abs(sin(slowTime)) * 0.5, st.y) * sin1 + cos1);
    // color = mix(color, red, smoothstep(0.35, 0.8, st.y + cos((st.x + 3.0) * 5.0) * 0.05));
    // color = mix(color, white, smoothstep(0.4, 1.0, st.y * abs(sin2 * sin1)));
    // color = mix(color, darkBlue, smoothstep(0.0, 1.0, 1.0 - (st.x + st.y)));
    // color = mix(color, blue, smoothstep(0.9, 1.1, st.y + cos((st.x+ slowTime) * 4.0 ) * 0.05));
    // color = mix(color, darkBlue, smoothstep(0.2, 1.0, (st.x - st.y) * sin2));

    // Plot transition lines for each channel
    // color = mix(color,vec3(1.0,0.0,0.0),plot(st,pct.r));
    // color = mix(color,vec3(0.0,1.0,0.0),plot(st,pct.g));
    // color = mix(color,vec3(0.0,0.0,1.0),plot(st,pct.b));

    gl_FragColor = vec4(color,1.0);
}