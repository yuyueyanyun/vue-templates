<template>
  <div class="box">
    <div class="drop drop-1"></div>
    <div class="drop drop-2"></div>
    <div class="drop drop-3"></div>
  </div>
</template>
<style scoped>
.box {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #111;
  filter: contrast(30);
}
.drop {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  filter: blur(15px);
}
.box .drop-1 {
  background-color: rgb(255, 255, 0);
  animation: drop 2s ease-in-out 0s infinite alternate;
}
.box .drop-3 {
  background-color: rgb(0, 38, 255);
  animation: drop 2s ease-in-out 2s infinite alternate;
}
.box .drop-2 {
  background-color: #0ff;
  animation: wave 2s linear 1s infinite alternate;
}
@keyframes drop {
  0% {
    transform: translateX(-120px);
  }
  100% {
    transform: translateX(120px);
  }
}
@keyframes wave {
  0% {}
  50% {
    transform: scale(1.1) rotate(180deg);
    border-top-left-radius: 45%;
    border-bottom-right-radius: 45%;
  }
  100% {}
}
</style>
