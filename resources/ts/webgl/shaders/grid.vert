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
float PI = 3.14;

#pragma glslify: snoise2 = require(glsl-noise/simplex/2d.glsl);

vec3 rotate(vec3 p, float angle, vec3 axis){
    vec3 a = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float r = 1.0 - c;
    mat3 m = mat3(
        a.x * a.x * r + c,
        a.y * a.x * r + a.z * s,
        a.z * a.x * r - a.y * s,
        a.x * a.y * r - a.z * s,
        a.y * a.y * r + c,
        a.z * a.y * r + a.x * s,
        a.x * a.z * r + a.y * s,
        a.y * a.z * r - a.x * s,
        a.z * a.z * r + c
    );
    return m * p;
}

vec3 waveForm(vec3 originalPosition, float noise) {
  vec3 pos = originalPosition;
  pos.x = indices.x * SEPARATION - ( rowNums * SEPARATION ) / 2.0 ;
  pos.y = cos(noise * 20.0 + pos.x * pos.y + time * 2.5) * 10.0;
  pos.z = indices.y * SEPARATION * 2.0 - ( columnNums *  SEPARATION * 2.0) / 2.0 ;
  return pos;
}

vec3 sphereForm(vec3 originalPosition, float r) {
  vec3 pos = originalPosition;
  float rad1 = radians(indices.x / rowNums * 360.0);
  float rad2 = radians(indices.y / columnNums * 360.0);
  pos.x = cos(rad1) * cos(rad2) * r;
  pos.y = cos(rad1) * sin(rad2) * r;
  pos.z = sin(rad1) * r;

  vec3 distPos = rotate(pos, radians(time * 100.0), vec3(0.0, 1.0, 0.0));
  return distPos;
}

void main() {
  // float now = max(0.0, time);
  vec3 pos = position;
  vec2 normalizedIndices = vec2(indices.x / rowNums, indices.y / columnNums);
  // float noise = 1.0;
  float noise = snoise2(normalizedIndices);
  float pointSize = dotSize * RATIO;

  vec3 wavePosition = waveForm(pos,noise);
  vec3 spherePosition = sphereForm(pos, 50.0);
  float mixFactor = (clamp(15.0 * cos((time + normalizedIndices.x * normalizedIndices.y / 0.8) / 5.0 ), -1.0, 1.0) + 1.0 ) / 2.0;
  // float mixFactor = (clamp(15.0 * cos((time ) / 2.5 ), -1.0, 1.0) + 1.0 ) / 2.0;
  vec3 distPosition = mix(spherePosition, wavePosition, mixFactor);

  vec4 mvPosition = modelViewMatrix * vec4( distPosition, 1.0 );

  gl_PointSize = pointSize * ( (50.0 + 50.0 * mixFactor ) / - mvPosition.z ) ;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(distPosition , 1.0 );
  vIndices = vec2(indices.x / rowNums, indices.y / columnNums);
  vPosition = distPosition;
  // gl_PointSize = size * 300.0;
}
