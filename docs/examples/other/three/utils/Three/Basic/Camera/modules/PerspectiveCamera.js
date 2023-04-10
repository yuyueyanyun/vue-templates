
import { PerspectiveCamera } from 'three';

class Perspective {
  #parameters={
    width: 1,
    height: 1,
    fov: 75,
    cross : [0.1, 1000],
    up:  [0, 1, 0], // 默认Y轴朝上 执行.lookAt()时候，会读取上方向.up的属性值
    lookAt : [0, 0, 0],
    position: [0, 500, 500],
  }
  constructor(parameters) {
    const _parameters = {};
    Object.keys(this. #parameters).forEach((key) => {
      _parameters[key] = Object.hasOwn(parameters, key) ? parameters[key]: this.#parameters[key];
    })
    const camera = new PerspectiveCamera(
      _parameters.fov,
      _parameters.width / _parameters.height,
      ..._parameters.cross
    );
    camera.position.set(..._parameters.position);
    camera.up.set(..._parameters.up);
    camera.lookAt(..._parameters.lookAt);
    return camera;
  }
};

export default Perspective;

