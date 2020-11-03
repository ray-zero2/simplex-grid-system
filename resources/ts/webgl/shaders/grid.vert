attribute vec3 position;
attribute vec3 normal;
attribute float dotSize;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
// uniform vec2 u_resolution;
uniform float time;
varying vec2 vUv;
// varying vec2 resolution;
void main() {
  vUv = uv;
  // resolution = u_resolution;
  gl_PointSize = dotSize * 10.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  // gl_PointSize = size * 300.0;
}
