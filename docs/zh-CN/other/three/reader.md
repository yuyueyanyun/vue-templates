---
title: 创建一个场景
lang: zh-CN
---

# 渲染场景

场景（Scene）、相机（PerspectiveCamera）和渲染器（WebGLRenderer），我们就能透过摄像机渲染出场景。
:::demo

other/three/reader/demo

:::
## 相机
四种相机  `PerspectiveCamera`(透视相机)`、OrthographicCamera`(正交投影相机）、`CubeCamera`(立方体相机或全景相机)、`StereoCamera`(3D相机）;

### 透视投影相机（perspectiveCamera）
<ElRow>
  <img src="/images/three/camera_space.png" style="height: 200px;"/>
</ElRow>

:::demo

other/three/reader/perspectiveCamera

:::
### 正交投影相机（OrthographicCamera）
<ElRow>
  <img src="/images/three/ortho.jpg" style="height: 200px;"/>
</ElRow>

:::demo

other/three/reader/orthographicCamera

:::

### 立方体相机（CubeCamera）
全景相机是可以360度拍摄的相机，使用六个不同方向上的相机同时拍摄，将拍摄的结果融合到同一个画面中。CubeCamera(near,far,cubeResolution)

