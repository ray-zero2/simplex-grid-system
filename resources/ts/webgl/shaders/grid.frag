precision highp float;
uniform float time;
varying vec2 vIndices;
varying vec3 vPosition;

vec4 dotForm(vec2 centeredCoord, float size) {
  float len = length(centeredCoord);
  vec4 form = len <= size ? vec4(1.0, 1.0, 1.0, 1.0) : vec4(0.0, 0.0, 0.0, 0.0);
  return form;
}

void main() {
  vec2 coord = gl_PointCoord;
  vec2 centeredCoord = vec2((coord.x * 2.0 - 1.0) / 2.0, (coord.y * 2.0 - 1.0) / 2.0);
  vec4 circle = dotForm(centeredCoord, 0.5);
  vec4 distColor = circle * vec4(vIndices, 0.0, 1.0);
  // gl_FragColor = circle;
  gl_FragColor = distColor;
}
