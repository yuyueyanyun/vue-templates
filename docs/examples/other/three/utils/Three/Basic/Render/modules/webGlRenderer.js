import { WebGLRenderer, PCFSoftShadowMap } from 'three';

class InitWebGLRenderer {
  render;
  #parameters={
    canvas: undefined, // 一个供渲染器绘制其输出的canvas 它和下面的domElement属性对应。 如果没有传这个参数，会创建一个新canvas
    context: null, // 用于将渲染器附加到已有的渲染环境(RenderingContext)中
    precision: 'highp', // 着色器精度. 可以是 "highp", "mediump" 或者 "lowp". 如果设备支持 .
    alpha:false, //  controls the default clear alpha value. When set to true, the value is 0. Otherwise it's 1. Default is false. 为true背景色为透明
    premultipliedAlpha: true,  // renderer是否假设颜色有 premultiplied alpha.
    antialias:true, // 是否执行抗锯齿。默认为false.
    stencil: true, // 绘图缓存是否有一个至少8位的模板缓存(stencil buffer)
    preserveDrawingBuffer: false, // 是否保留缓直到手动清除或被覆盖。
    powerPreference: 'default', // 提示用户代理怎样的配置更适用于当前WebGL环境。 可能是"high-performance", "low-power" 或 "default"。默认是"default".
    failIfMajorPerformanceCaveat: false, // 检测渲染器是否会因性能过差而创建失败。
    depth: true, // 绘图缓存是否有一个至少6位的深度缓存(depth buffer )。
    logarithmicDepthBuffer: false, // 是否使用对数深度缓存。如果要在单个场景中处理巨大的比例差异，就有必要使用。
  };
  #shadowMap={
    enabled: true, // 允许在场景中使用阴影贴图
    utoUpdate: true, //  启用场景中的阴影自动更新。
    needsUpdate: false, //  场景中的阴影贴图会在下次render调用时不刷新。默认是false
    type: PCFSoftShadowMap, // 定义阴影贴图类型
  };
  constructor(parameters = {}, shadowMap={}, config={}) {
    const _parameters = {};
    Object.keys(this.#parameters).forEach((key) => {
      _parameters[key] = Object.hasOwn(parameters, key) ? parameters[key]: this.#parameters[key];
    });
    this.render = new WebGLRenderer(parameters);
    this.shadowMap(shadowMap);
    return this.render
  }
  shadowMap(shadowMap) {
    Object.keys(this.#shadowMap).forEach((key) => {
      this.render[key] = Object.hasOwn(shadowMap, key) ? shadowMap[key]: this.#shadowMap[key];
    });
  }
};
export default InitWebGLRenderer;

