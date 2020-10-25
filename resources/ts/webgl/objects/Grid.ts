import * as THREE from 'three';

export class Grid {
  time: number;
  object: THREE.Mesh

  constructor() {
    this.time = 0;
    this.object = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshNormalMaterial())
  }

  update(deltaTime: number) {
    this.time += deltaTime;
    this.object.rotation.x += 0.007
    this.object.rotation.y += 0.03
    this.object.rotation.z += 0.012
  }
}
