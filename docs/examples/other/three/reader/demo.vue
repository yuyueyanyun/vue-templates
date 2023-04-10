<template>
  <div ref="threeEL" class="three" />
</template>
<script setup>
import { onMounted, ref , } from 'vue';
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import ThreeHelper from '../utils/three-helper';
// import * as THREE from 'three'

const threeEL = ref(null);
const render = () => {
  const scene = new Scene();
  // 添加辅助
  const helper = new ThreeHelper(scene);
  helper.addAxesHelper(500).addGridHelper(500, 10);

  const renderer = new WebGLRenderer();
  renderer.setSize(300, 150);

  const camera = new PerspectiveCamera(
    25,
    300 / 150,
    0.1,
    1000,
  );
  helper.addCameraHelper(camera);
  const cameraV = new PerspectiveCamera(
    75,
    300 / 150,
    0.1,
    1000,
  );
  cameraV.position.set(200, 200, 200);
  cameraV.up.set(0, 1, 0);
  cameraV.lookAt(0, 0, 0);
  renderer.render(scene, cameraV);
  threeEL.value.appendChild(renderer.domElement);
};

onMounted(() => {
  render();
});
</script>
<style scoped>
</style>
