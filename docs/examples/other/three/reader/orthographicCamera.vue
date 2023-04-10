<template>
  <el-form>
    <el-form-item label="左侧面">
      <el-slider
        v-model="form.left"
        :step="10"
        :min="-1000"
        :max="0"
      />
    </el-form-item>
    <el-form-item label="右侧面">
      <el-slider
        v-model="form.right"
        :step="10"
        :min="0"
        :max="1000"
      />
    </el-form-item>
    <el-form-item label="上侧面">
      <el-slider
        v-model="form.top"
        :step="10"
        :min="0"
        :max="1000"
      />
    </el-form-item>
    <el-form-item label="下侧面">
      <el-slider
        v-model="form.bottom"
        :step="10"
        :min="-1000"
        :max="0"
      />
    </el-form-item>
    <el-form-item label="近端面">
      <el-slider
        v-model="form.near"
        :step="10"
        :min="0"
        :max="1000"
      />
    </el-form-item>
    <el-form-item label="远端面">
      <el-slider
        v-model="form.far"
        :step="10"
        :min="-1000"
        :max="0"
      />
    </el-form-item>
  </el-form>
  <div ref="threeEL" class="three" />
</template>
<script setup>
import { onMounted, reactive, ref , watch } from 'vue';
import {
  OrthographicCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import ThreeHelper from '../utils/three-helper';

const form = reactive({
  left: -1000,
  right: 1000,
  top: 1000,
  bottom: -1000,
  near: 1000,
  far: -1000,
});

const threeEL = ref(null);
const scene = new Scene();
const renderer = new WebGLRenderer();
renderer.setSize(300, 150);
const helper = new ThreeHelper(scene);
const camera = new OrthographicCamera(
  form.left,
  form.right,
  form.top,
  form.bottom,
  form.near,
  form.far,
);
camera.position.set(300, 400, 400);
camera.lookAt(0,0,0);
const upDatecamera = () => {
  camera.left = form.left;
  camera.right= form.right;
  camera.top= form.top;
  camera.bottom= form.bottom;
  camera.near= form.near;
  camera.far= form.far;
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
};

const render = () => {
  // 添加辅助
  helper.addAxesHelper(1000).addGridHelper(1000, 10);
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
