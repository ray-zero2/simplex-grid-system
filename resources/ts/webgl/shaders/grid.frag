precision highp float;
uniform float time;
varying vec3 vUv;
void main() {
  gl_FragColor = vec4(vUv, 1.0);
}
