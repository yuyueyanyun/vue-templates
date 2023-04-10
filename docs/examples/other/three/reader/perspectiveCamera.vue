<template>
  <el-form>
    <el-row :gutter="8">
      <el-col :span="8">
        <el-form-item label="视野">
          <el-slider v-model="form.fov" :step="1" :min="1" :max="180" />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="宽高比">
          <el-slider
            v-model="form.aspectRatio"
            :step="0.1"
            :min="0.1"
            :max="10"
          />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="渲染距离">
          <el-slider
            v-model="form.cross"
            range
            :step="0.1"
            :min="0.1"
            :max="1000"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="相机位置">
      <el-input-number v-model="form.x" :step="10" step-strictly/>
      <el-input-number v-model="form.y" :step="10" step-strictly/>
      <el-input-number v-model="form.z" :step="10" step-strictly/>
    </el-form-item>
    <el-form-item label="相机UP">
      <el-radio-group v-model="form.up">
        <el-radio v-for="(val, key) in UP" :key="key" :label="key">{{ key }}</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
  <div ref="threeEL" class="three" />
</template>
<script setup>
import { onMounted, reactive, ref , watch } from 'vue';
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import ThreeHelper from '../utils/three-helper';
// import * as THREE from 'three'
const UP = {
  X: [1, 0, 0],
  Y: [0, 1, 0],
  Z: [0, 0, 1],
}
const form = reactive({
  fov: 75,
  aspectRatio: 300 / 150,
  cross: [0.1, 2000],
  x: 200,
  y: 400,
  z: 400,
  up: 'Y',
});


const threeEL = ref(null);
const scene = new Scene();
const camera = new PerspectiveCamera(
  form.fov,
  form.aspectRatio,
  form.cross[0],
  form.cross[1],
);
camera.position.set(form.x, form.y, form.z);
camera.lookAt(0,0,0);
const renderer = new WebGLRenderer();
renderer.setSize(300, 150);

const upDatecamera = () => {
  const {
    fov,
    aspectRatio,
    cross: [near, far],
    x,
    y,
    z,
    up,
  } = form;
  camera.up.set(...UP[up]);
  camera.fov = fov;
  camera.aspect = aspectRatio;
  camera.near = near;
  camera.far = far;
  camera.position.set(x, y, z);
  camera.lookAt(0,0,0);
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
};

const render = () => {
  // 添加辅助
  const helper = new ThreeHelper(scene);
  helper.addAxesHelper(1000).addGridHelper(500, 10);
  upDatecamera();
  threeEL.value.appendChild(renderer.domElement);
};
watch(
  () => form,
  () => {
    if(camera) {
      upDatecamera();
    };
  },
  {
    deep: true,
  },
);

onMounted(() => {
  render();
});
</script>
<style scoped>
.three {
  display: flex;
  justify-content: center;
}
</style>
