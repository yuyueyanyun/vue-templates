<template>
    <div ref="threeEL" class="three" />
  </template>
  <script setup>
  import { onMounted, ref  } from 'vue';
  import {
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
  } from 'three';
  import cThree from '../utils/Three/Basic/index';
const config = {
  camera: {
    type: 'PerspectiveCamera',
    position: [200, 300, 200],
  },
  render: {
    type: 'WebGLRenderer',
  },
  lights: [
    {
      name: 'pointLight',
      type: 'PointLight',
      position: [400, 200, 300],
      color: 0xffffff,
      castShadow: true,
    },
    {
      name: 'ambientLight',
      type: 'AmbientLight',
      color: 0x444444,
    }
  ]
}
  
  const threeEL = ref(null);
  
  const geometry = new SphereGeometry(60, 40, 40);
  const material = new MeshBasicMaterial( { color: 0x0000ff } );
  const cube = new Mesh( geometry, material );
  cube.translateX(120); //模型沿Y轴正方向平移120

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
  