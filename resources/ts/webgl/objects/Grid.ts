import * as THREE from 'three';

export class Grid {
  object: THREE.Mesh
  constructor() {
    this.object = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshNormalMaterial())
  }
}
