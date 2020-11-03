import * as THREE from 'three';
import { PointBufferGeometry } from '../geometry/PointBufferGeometry';
import vs from '../shaders/grid.vert';
import fs from '../shaders/grid.frag';

export class Grid {
  time: number;
  object: THREE.Points;
  size: number;
  rowNums: number;
  columnNums: number;

  constructor(size: number, rowNums: number, columnNums: number) {
    this.time = 0;
    this.size = size;
    this.rowNums = rowNums;
    this.columnNums = columnNums;
    this.object = this.createMesh();
    console.log(this.object.material);
  }

  update(deltaTime: number) {
    this.time += deltaTime;
    this.object.material.uniforms.time.value = this.time;
    // this.object.rotation.x += 0.007
    // this.object.rotation.y += 0.03
    // this.object.rotation.z += 0.012
  }

  private createGeometry() {
    const geometry = new PointBufferGeometry(this.size, this.rowNums, this.columnNums);
    return geometry;
  }

  private createMaterial() {
    const material = new THREE.RawShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        time: { type: 'f', value: this.time } as THREE.IUniform,
        width: { type: 'f', value: this.size } as THREE.IUniform,
        rowNums: { type: 'f', value: this.rowNums } as THREE.IUniform,
        columnNums: { type: 'f', value: this.columnNums } as THREE.IUniform
      },
      side: THREE.DoubleSide
    });
    return material;
  }

  private createMesh() {
    const geometry = this.createGeometry();
    const material = this.createMaterial();
    const mesh = new THREE.Points(geometry, material);
    return mesh;
  }
}
