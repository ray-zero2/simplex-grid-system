import * as THREE from 'three';

export class PointBufferGeometry extends THREE.BufferGeometry {
  constructor(
    public size: number,
    public rowNums: number,
    public columnNums: number,
    public maxSize: number = 20
  ) {
    super();
    this.createParams(rowNums, columnNums, maxSize);
    this.computeVertexNormals();
  }

  private createParams(rowNums: number, columnNums: number, maxSize: number) {

    const position: number[] = [];
    const colors: number[] = [];
    const dotSize: number[] = [];
    const indices: number[] = [];

    for(let i = 1; i  <= rowNums; i++) {
      for(let j = 1; j <= columnNums; j ++) {

        const x = 0;
        const y = 0;
        const z = 0;
        position.push(x, y, z);

        const size = 1;
        dotSize.push(size);

        const rowIndex = i - 1;
        const columnIndex = j - 1;
        indices.push(rowIndex, columnIndex);

        const colors = new THREE.Color
      }
    }
    this.setAttribute('position', new THREE.BufferAttribute(new Float32Array(position), 3));
    // this.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
    this.setAttribute('dotSize', new THREE.BufferAttribute(new Float32Array(dotSize), 1));
    this.setAttribute('indices', new THREE.BufferAttribute(new Float32Array(indices), 2));
  }
}
