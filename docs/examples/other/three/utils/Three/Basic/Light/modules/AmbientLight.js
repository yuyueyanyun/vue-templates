import { AmbientLight } from 'three';

class InitWebGLRenderer {
  light;
  constructor({color="#111", intensity=1}) {
    return new AmbientLight(color, intensity);
  }
};
export default InitWebGLRenderer;

