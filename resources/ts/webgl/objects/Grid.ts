import * as THREE from 'three';
import { PointBufferGeometry } from '../geometry/PointBufferGeometry';
import vs from '../shaders/grid.vert';
import fs from '../shaders/grid.frag';

export class Grid {
  time: number;
  object: THREE.Mesh

  constructor() {
    this.time = 0;
    this.object = this.createMesh();

  }

  update(deltaTime: number) {
    this.time += deltaTime;
    // this.object.rotation.x += 0.007
    // this.object.rotation.y += 0.03
    // this.object.rotation.z += 0.012
  }

  private createGeometry() {
    const geometry = new PointBufferGeometry(1, 1, 20);
    return geometry;
  }

  private createMaterial() {
    const material = new THREE.RawShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        time: { type: 'f', value: 0 } as THREE.IUniform
      },
      side: THREE.DoubleSide
    });
    return material;
  }

  private createMesh() {
    const geometry = this.createGeometry();
    const material = this.createMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }
}
