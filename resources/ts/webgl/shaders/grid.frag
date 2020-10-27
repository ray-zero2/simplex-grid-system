precision highp float;
uniform float time;
varying vec3 vUv;
varying vec2 resolution;

vec4 dotFomr(vec2 centeredUv, float size) {
  float len = length(centeredUv);
  vec4 form = len <= size ? vec4(1.0, 1.0, 1.0, 1.0) : vec4(0.0, 0.0, 0.0, 0.0);
  return form;
}

void main() {
  vec2 centeredUv = vec2((vUv.x * 2.0 - 1.0) / 2.0, (vUv.y * 2.0 - 1.0) / 2.0);
  vec4 circle = dotFomr(centeredUv, 0.5);
  gl_FragColor = circle;
}
