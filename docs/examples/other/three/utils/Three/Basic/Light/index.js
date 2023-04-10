import AmbientLight from './modules/AmbientLight'
import PointLight from './modules/PointLight'

const LightType = {
  AmbientLight,
  PointLight,
};

class Light {
  constructor({type, ...parameters} = {}) {
    if(Object.hasOwn(LightType, type)) {
      return new LightType[type](parameters);
    }else {
      throw new Error('err');
    }
  }
}
export default Light;
