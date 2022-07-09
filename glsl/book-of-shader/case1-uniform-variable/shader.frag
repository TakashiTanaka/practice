#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

float sinWav(float coefficient) {
    return abs(sin(u_time * coefficient));
}

void main() {
	gl_FragColor = vec4(sinWav(1.0),sinWav(0.1),sinWav(3.0),1.0);
}
