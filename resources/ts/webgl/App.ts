import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Grid } from './objects/Grid';

interface ViewProps {
  width: number;
  height: number;
  dpr: number;
}

export class App {
  canvasElement: HTMLCanvasElement;
  viewProps: ViewProps
  renderer: THREE.WebGL1Renderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  grid: Grid;
  clock: THREE.Clock;
  time: number;
  controls: OrbitControls;

  constructor(selector: string = '.canvas-wrapper') {
    this.renderer = new THREE.WebGL1Renderer({
      antialias: true
    });
    const canvasWrapper = document.querySelector(selector);
    canvasWrapper.append(this.renderer.domElement)

    this.viewProps = {
      width: this.renderer.domElement.clientWidth,
      height: this.renderer.domElement.clientHeight,
      dpr: Math.min(devicePixelRatio, 2 || 1),
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.viewProps.width/this.viewProps.height,
      1,
      1000
      )

    this.clock = new THREE.Clock();
    this.grid = new Grid(1000, 300, 100);
    this.time = 0;
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.init();
    this.bind();
  }

  render(deltaTime) {
    this.time = deltaTime;
    this.controls.update();
    this.grid.update(deltaTime);
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    console.log('animate');

    const deltaTime = this.clock.getDelta();
    this.render(deltaTime)
    requestAnimationFrame(this.animate.bind(this));
  }

  // renderLoop() {
  //   this.render();
  // }
  resize() {
    console.log('resize');
    this.renderer.domElement.style.width = '100vw';
    this.renderer.domElement.style.height = '300px'

    const width = this.renderer.domElement.clientWidth;
    const height = this.renderer.domElement.clientHeight;
    this.renderer.domElement.width = width ;
    this.renderer.domElement.height = height;
    this.viewProps.width = width;
    this.viewProps.height = height;

    this.renderer.setSize(width, height);
    this.camera.aspect = width/height;
    this.camera.updateProjectionMatrix()
  }

  bind() {
    window.addEventListener('resize', this.resize.bind(this));
  }

  init() {
    this.renderer.setPixelRatio(this.viewProps.dpr);
    this.renderer.setClearColor(0x000000, 1.0);

    this.resize();

    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.1;

    // this.canvasElement.width = this.canvasElement;
    // this.renderer.domElement.height = this.viewProps.height;

    this.grid.object.position.x = 0;
    this.grid.object.position.z = 0;

    this.scene.add(this.grid.object)
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 200;
    this.clock.start();
    this.animate();
  }
}
