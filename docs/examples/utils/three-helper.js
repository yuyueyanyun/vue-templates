import { AxesHelper, CameraHelper, GridHelper } from 'three'
import Stats from 'stats.js'

class ThreeHelper {
  scene
  #stats = new Stats()
  constructor(scene) {
    this.scene = scene
  }
  /**  用于简单模拟3个坐标轴的对象.
   * 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
   */
  addAxesHelper(num = 10) {
    const axesHelper = new AxesHelper(num)
    this.scene.add(axesHelper)
    return this
  }
  /** 用于模拟相机视锥体的辅助对象.
   * @param {object} camera -- 被模拟的相机.
   */
  addCameraHelper(camera) {
    const helper = new CameraHelper(camera)
    this.scene.add(helper)
    return this
  }
  /** 坐标格辅助对象. 坐标格实际上是2维线数组.
   * @param {number} size -- 坐标格尺寸. 默认为 10.
   * @param {number} divisions -- 坐标格细分次数. 默认为 10.
   * @param {string} colorCenterLine -- 中线颜色. 值可以为 Color 类型, 16进制 和 CSS 颜色名. 默认为 0x444444
   * @param {string} colorGrid -- 坐标格网格线颜色. 值可以为 Color 类型, 16进制 和 CSS 颜色名. 默认为 0x888888
   */
  addGridHelper(...ages) {
    const gridHelper = new GridHelper(...ages)
    this.scene.add(gridHelper)
    return this
  }
  /**
   * @param {object} dom -- 被插入的dom元素.
   */
  addStats(Dom) {
    this.#stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    Dom.appendChild(stats.domElement);
    function animate() {
      this.#stats.begin();
      // monitored code goes herestats.end();
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    return this;
  }
}

export default ThreeHelper
