<template>
  <div ref="threeEL" class="three" />
</template>
<script setup>
import { onMounted, ref  } from 'vue';
import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
import cThree from '../utils/Three/Basic/index';
import config from './config';

const threeEL = ref(null);

const geometry = new BoxGeometry(100, 100, 100);
const material = new MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new Mesh( geometry, material );

onMounted(() => {
  const three = new cThree(threeEL.value, config);
  three.add(cube);
  three.render();
});
</script>
<style scoped>
.three {
  display: flex;
  justify-content: center;
  width: 300px;
  height: 150px;
}
</style>
