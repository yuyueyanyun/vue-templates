import PerspectiveCamera from './modules/PerspectiveCamera'

const CameraType = {
  PerspectiveCamera,
};

class Camera {
  constructor({type, ...parameters} = {}) {
    if(Object.hasOwn(CameraType, type)) {
      return new CameraType[type](parameters);
    }else {
      throw new Error('err');
    }
  }
}
export default Camera;
