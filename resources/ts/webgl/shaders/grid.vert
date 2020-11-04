attribute vec3 position;
attribute vec3 normal;
attribute vec2 indices;
attribute float dotSize;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
// uniform vec2 u_resolution;
uniform float time;
uniform float width;
uniform float rowNums;
uniform float columnNums;

varying vec3 vPosition;
varying vec2 vIndices;
// varying vec2 resolution;

float RATIO = 4.0;
float SEPARATION = RATIO / 2.0;

vec3 waveForm(vec3 originalPosition) {
  vec3 pos = originalPosition;
  pos.x = indices.x * SEPARATION - ( rowNums * SEPARATION ) / 2.0 ;
  pos.y = sin((time * 2.0 + indices.x * indices.y / 200.0) / 5.0) * 15.0;
  pos.z = indices.y *  SEPARATION * 3.0 - ( columnNums *  SEPARATION * 5.0 ) / 3.0 ;
  // pos.z = -indices.y * SEPARATION * 5.0;
  return pos;
}

void main() {
  // resolution = u_resolution;
  vec3 pos = position;
  float pointSize = dotSize * RATIO;

  vec3 wavePosition = waveForm(pos);
  vec3 distPosition = wavePosition;
  vec4 mvPosition = modelViewMatrix * vec4( distPosition, 1.0 );

  gl_PointSize = pointSize * ( 100.0 / - mvPosition.z );
  gl_Position = projectionMatrix * modelViewMatrix * vec4(distPosition , 1.0 );
  vIndices = vec2(indices.x / rowNums, indices.y / columnNums);
  vPosition = distPosition;
  // gl_PointSize = size * 300.0;
}
