attribute vec3 position;
attribute vec3 normal;
attribute vec3 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec2 u_resolution;
uniform float time;
varying vec3 vUv;
varying vec2 resolution;
void main() {
  vUv = uv;
  resolution = u_resolution;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
