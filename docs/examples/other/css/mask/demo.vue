<template>
<div class="box">
  <img src="https://raw.githubusercontent.com/yuyueyanyun/vue-templates/main/docs/public/images/css/mask_img.jpg"/>
  <div class="mask">
    <p>元芳，你怎么看</p>
    <p>看看我的生活，希望您多一些快乐陌生人</p> 
  </div>
</div>
</template>
<style scoped>
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
  -webkit-mask-image: url('https://raw.githubusercontent.com/yuyueyanyun/vue-templates/main/docs/public/images/css/mask_src.png');
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
}
p:first-of-type {
  top: 60%;
  left: 100%;
  animation: roll 6s linear 0s infinite;
}
p:last-of-type {
  top: 46%;
  left: 100%;
  animation: roll 6s linear 0.5s infinite;
}
</style>
