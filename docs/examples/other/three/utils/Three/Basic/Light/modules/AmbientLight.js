import { AmbientLight } from 'three';

// 环境光
class InitWebGLRenderer {
  light;
  constructor({color="#111", intensity=1}) {
    return new AmbientLight(color, intensity);
  }
};
export default InitWebGLRenderer;

