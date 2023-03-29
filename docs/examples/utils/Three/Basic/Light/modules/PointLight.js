import { PointLight } from 'three';

class InitWebGLRenderer {
  light;
  #parameters = {
    color: '#fff',
    intensity: 1, // 光照强度
    distance: 0, //  这个距离表示从光源到光照强度为0的位置。 当设置为0时，光永远不会消失(距离无穷大)。
    decay: 2, // 沿着光照距离的衰退量。
  };
  constructor({position, castShadow, ...parameters}) {
    const _parameters = {};
    Object.keys(this.#parameters).forEach((key) => {
      _parameters[key] = Object.hasOwn(parameters, key) ? parameters[key]: this.#parameters[key];
    });
    this.light = new PointLight(_parameters.color, _parameters.intensity, _parameters.distance, _parameters.decay);
    this.setPosition(position);
    this.shadow(castShadow);
    return new PointLight(color, intensity);
  }
  setPosition(position) {
    if(!position)  throw new Error('err');
    this.light.position.set(...position);
  }
  shadow(castShadow) {
    this.light.castShadow = castShadow;
  }
};
export default InitWebGLRenderer;

