import * as THREE from 'three';

export class PointBufferGeometry extends THREE.BufferGeometry {

  constructor(rowNums: number, columnNums: number, maxSize: number = 20) {
    super();
    this.createParams(rowNums, columnNums, maxSize);
    this.computeVertexNormals();
  }

  private createParams(rowNums: number, columnNums: number, maxSize: number) {

    const vertices = [];
    const colors = [];
    const uvs = [];
    const indices = [];

    for(let i = 1; i  <= rowNums; i++) {
      for(let j = 1; j <= columnNums; j ++) {
        const size = maxSize / columnNums * j;

        //left top
        vertices.push(-size/2) //x
        vertices.push(size/2) //y
        vertices.push(0) //x
        colors.push(1) //r
        colors.push(1) //g
        colors.push(1) //b
        uvs.push(0) //x
        uvs.push(0) //y

        //right top
        vertices.push(size/2) //x
        vertices.push(size/2) //y
        vertices.push(0) //x
        colors.push(1) //r
        colors.push(1) //g
        colors.push(1) //b
        uvs.push(1) //x
        uvs.push(0) //y

        //right bottom
        vertices.push(size/2) //x
        vertices.push(-size/2) //y
        vertices.push(0) //x
        colors.push(1) //r
        colors.push(1) //g
        colors.push(1) //b
        uvs.push(1) //x
        uvs.push(1) //y

        //left bottom
        vertices.push(-size/2) //x
        vertices.push(-size/2) //y
        vertices.push(0) //x
        colors.push(1) //r
        colors.push(1) //g
        colors.push(1) //b
        uvs.push(0) //x
        uvs.push(1) //y

        //三角メッシュ x 2で四角メッシュ生成
        const indexOffset = i * j * 4 - 4;
        //左上のメッシュ
        indices.push(indexOffset);
        indices.push(indexOffset + 1);
        indices.push(indexOffset + 3);

        //右下のメッシュ
        indices.push(indexOffset + 1);
        indices.push(indexOffset + 2);
        indices.push(indexOffset + 3);
      }
    }
    this.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    this.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
    this.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1));
  }
}
