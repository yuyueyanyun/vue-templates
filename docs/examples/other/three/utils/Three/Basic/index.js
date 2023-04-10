import Helper from '../three-helper';
import Scene from './Scene';
import Render from './Render/index';
import Camera from './Camera/index';
import Light from './Light/index';

class L3D {
  #height;
  #width;
  #el;
  #config= new Map([
    [
      'camera',
      {
        type: 'PerspectiveCamera',
      }
    ],
    [
      'render',
      {
        type: 'WebGLRenderer',
      },
    ],
    ['lights', null],
  ]);
  scene;
  camera;
  renderer;
  lightMap = new Map();
  constructor(el, config) {
    this.#el = el;
    this.#height = el.clientHeight;
    this.#width = el.clientWidth;
    Object.keys(config).forEach(key => {
      this.#config.set(key, config[key])
    });
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initHelper();
    this.initLight();
  };
  initScene() {
    this.scene = new Scene();
  }
  initCamera() {
    this.camera = new Camera({
      width: this.#width,
      height: this.#height,
      ...(this.#config.get('camera')),
    });
  }
  initRenderer() {
    this.renderer = new Render(this.#config.get('render'));
  }
  initHelper () {
    const helper = new Helper(this.scene);
    helper.addAxesHelper(1000).addGridHelper(500, 10);
  }
  initLight() {
    const lights = this.#config.get('lights');
    if(Array.isArray(lights)) {
      lights.forEach((item) => {
        this.lightMap.set(item.name, new Light(item));
        this.scene.add(this.lightMap.get(item.name));
      });
    }

    // this.lightMap.set('AmbientLight', new Light({
    //   type: 'AmbientLight'
    // }));
    // this.lightMap.set('PointLight', new Light({
    //   type: 'PointLight'
    // }));
  }
  render() {
    this.renderer.render(this.scene, this.camera);
    this.#el.appendChild(this.renderer.domElement);
  }
  add(cube) {
    this.scene.add(cube);
  }
}

export default L3D;
