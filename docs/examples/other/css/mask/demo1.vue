<template>
  <Suspense>
    <lq-codepen 
      :html="htmlTxt"
      :css="cssTxt"
    />
  </Suspense>
</template>
<script setup lang="ts">
import imgSrc from "/public/images/css/mask_img.jpg"
import my from '/public/images/css/mask_src.png'
const htmlTxt = `
<div class="box">
  <img src="${imgSrc}"/>
  <div class="mask">
    <p>元芳，你怎么看</p>
    <p>看看我的生活，希望您多一些快乐陌生人</p> 
  </div>
</div>`
const cssTxt = `
@keyframes roll {
  0% {
    left: 100%;
  }
  100% {
    transform: translateX(-100%);
    left: 0;
  }
}
.box {
  position: relative;
  width: fit-content;
}
img {
  height: 260px;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-mask-image: url('${my}');
  -webkit-mask-size: auto 100%;
  -webkit-mask-repeat: no-repeat;
}
p {
  position: absolute;
  margin: 0;
  padding: 4px;
  color: #fff;
  background-color: rgba(167, 167, 167, 0.5);
  white-space: nowrap;
  &:first-of-type {
    top: 60%;
    left: 100%;
    animation: roll 6s linear 0s infinite;
  }
  &:last-of-type {
    top: 46%;
    left: 100%;
    animation: roll 6s linear 0.5s infinite;
  }
}`
</script>
<style scoped lang="scss">

</style>
