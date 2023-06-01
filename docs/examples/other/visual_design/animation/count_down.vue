<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
const digit = [
  //0
  [[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],
  //1
  [[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],
  //2
  [[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],
  //3
  [[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],
  //4
  [[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],
  //5
  [[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],
  //6
  [[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],
  //7
  [[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],
  //8
  [[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],
  //9
  [[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],
  //:
  [[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]],
];
let observeResize:ResizeObserver;
let timeSecond = 60 * 60;

const boxEl = ref<HTMLElement | null>(null);;
const canvasEl = ref<HTMLCanvasElement | null>(null);
const Config = {
  radius: 6,
  fillStyle: "#005588",
  space: 1,
  nSpace: 4,
  marginTop: 40,
  marginBoth: 90,
  time: timeSecond,
};

(() => {
  const timer = setInterval(() => {
    Config.time -= 1;
    if(Config.time <= 0) {
      clearInterval(timer);
    }
  }, 1000);
})();

const getTimeStr = (time: number) => {
  const hours = Math.floor(time /3600);       // 一共需要多少个小时
  const minute = Math.floor(time / 60 - (hours * 60));  
  const second = time % 60;
  return `${hours < 10 ? `0${hours}`: hours}:${minute < 10 
    ? `0${minute}`: minute}:${second < 10 ? `0${second}`: second}`
}

const minWidth = () => {
  const timeStr = getTimeStr(timeSecond); 
  let width = 0;
  if(width) {
    return width;
  }
  width += Config.marginBoth * 2;
  for(let i = 0, l = timeStr.length; i < l; i += 1 ) {
    if(timeStr[i] === ':') {
      width = width + Config.nSpace + Config.radius * 2 * 4 + Config.space * 3;
    } else {
      width = width + (i === 0 ? Config.nSpace : 0) + Config.radius * 2 * 7 + Config.space * 6;
    }
  }
  return width;
}

const setCvsStyle = () => {
  if(!boxEl.value || !canvasEl.value) return
  const width = minWidth();
  canvasEl.value.width = boxEl.value.clientWidth > width ? boxEl.value.clientWidth : width ;
  canvasEl.value.height = boxEl.value.clientHeight;
};

const renderDigit = (x:number, y:number, n:string, cxt:CanvasRenderingContext2D) => {
  const num = n ===':'? 10: Number(n);
  let pY = y + Config.radius;
  for (let i = 0; i < digit[num].length; i++) {
    let pX = x + Config.radius;
    for (let j = 0; j < digit[num][i].length; j++){
      if(digit[num][i][j] == 1){
        cxt.beginPath();
        cxt.arc(pX, pY, Config.radius, 0, Math.PI*2, true);
        cxt.fill();             
      }
      pX += Config.radius * 2 + Config.space;      
    } 
    pY += Config.radius * 2 + Config.space;  
  }
};
const render = (cxt: CanvasRenderingContext2D, timeStr: string) => {
  if(!canvasEl.value) return
  const { width, height } =  canvasEl.value
  // 对一个矩形空间内的图像进行一次刷新操作。这里，对整个屏幕进行一次刷新。
  cxt.fillStyle = Config.fillStyle;
  cxt.clearRect(0, 0, width, height);
  let position = (width - minWidth()) / 2 + Config.marginBoth;

  for(let i = 0, l = timeStr.length; i < l; i += 1 ) {
    renderDigit(position, Config.marginTop, timeStr[i], cxt); 
    position = position
      + Config.radius * 2 * (timeStr[i] ===":" ? 4: 7)
      + Config.space * (timeStr[i] ===":" ? 3: 6)
      + Config.nSpace;
  }
}

const init = () => {
  if(!canvasEl.value) return;
  const cxt = canvasEl.value.getContext('2d');
  return cxt;
};

onMounted(() => {
  if(!canvasEl.value) return;
  observeResize = new ResizeObserver(() => {
    setCvsStyle();
  });
  observeResize.observe(canvasEl.value);

  const cxt = init();
  if(!cxt) return;
  const loop = () => {
    const timeStr = getTimeStr(Config.time);
    render(cxt, timeStr);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
  if(!canvasEl.value) return;
  observeResize.unobserve(canvasEl.value);
});
</script>
<template>
  <div ref="boxEl">
    <canvas ref="canvasEl"></canvas>
  </div>
</template>
<style scoped>
div {
  width: 100%;
  height: 100%;
  min-height: 200px;
  max-height: 600px;
  background-color: rgb(15, 14, 14);
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
    