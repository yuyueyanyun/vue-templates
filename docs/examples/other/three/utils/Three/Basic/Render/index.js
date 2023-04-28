import WebGLRenderer from './modules/webGlRenderer'

const renderType = {
  WebGLRenderer,
};

class Render {
  constructor({type, config, ...parameters} = {}) {
    if(Object.hasOwn(renderType, type)) {
      return new renderType[type](parameters, config);
    }else {
      throw new Error('err');
    }
  }
}
export default Render;
