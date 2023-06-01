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
const storeBall:({
  x: number,
  y: number,
  vX: number,
  vY: number,
  g: number,
  radius: number,
  color:string,
})[] = [];
const getSpeed = (min: number = 0, max: number = 1) => {
  return Math.random() * (max - min) + min;
};

const boxEl = ref<HTMLElement | null>(null);;
const canvasEl = ref<HTMLCanvasElement | null>(null);
const Config = {
  radius: 6,
  fillStyle: "#005588",
  space: 1,
  nSpace: 4,
  marginTop: 40,
  marginBoth: 200,
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
  canvasEl.value.height = boxEl.value.clientWidth < width ? boxEl.value.clientHeight / boxEl.value.clientWidth * width :  boxEl.value.clientHeight;  
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
const addBall = (x:number, y:number, n:string) => {
  const num = n ===':'? 10: Number(n);
  let pY = y + Config.radius;
  for (let i = 0; i < digit[num].length; i++) {
    let pX = x + Config.radius;
    for (let j = 0; j < digit[num][i].length; j++){
      if(digit[num][i][j] == 1){
        storeBall.push({
          x: pX,
          y: pY,
          vX: getSpeed(-1, 1) * getSpeed(0.7, 1.3) || 0.1,
          vY: getSpeed(0, 0.4),
          g: 0.2,
          radius: Config.radius,
          color: `rgb(${Math.ceil(getSpeed(42, 255))}, ${Math.ceil(getSpeed(42, 255))}, 0)`,
        })
      }
      pX += Config.radius * 2 + Config.space;      
    } 
    pY += Config.radius * 2 + Config.space;  
  }
};
const renderBall = (cxt: CanvasRenderingContext2D, w: number, h: number) => {
  console.log(storeBall.length)
  for(let i = 0, l = storeBall.length; i < l; i += 1) {
    if(storeBall[i].x + storeBall[i].radius < 0 || storeBall[i].x - storeBall[i].radius > w ) {
      storeBall.splice(i, 1);
      i -= 1;
      l -= 1;
      continue;
    }
    const radgrad = cxt.createRadialGradient(
      storeBall[i].x - 2, storeBall[i].y - 2, 1,
      storeBall[i].x, storeBall[i].y, 6,
    );
    radgrad.addColorStop(0, "#ffffff");
    radgrad.addColorStop(0.8, storeBall[i].color);
    radgrad.addColorStop(1, storeBall[i].color);
    cxt.fillStyle = radgrad;
    cxt.beginPath();
    cxt.arc(storeBall[i].x, storeBall[i].y, storeBall[i].radius, 0, Math.PI*2, true);
    cxt.fill();
    let y;
    if(storeBall[i].g > 0) {
      let vY = storeBall[i].g + storeBall[i].vY;
      y = storeBall[i].y + storeBall[i].vY;
      if(y + storeBall[i].radius > h ) {
        y = 2 * h - y - storeBall[i].radius - storeBall[i].radius * 0.7;
        vY = -vY * 0.7;
        if(Math.abs(vY) < 0.015) {
          vY = 0;
          storeBall[i].g = 0;
        }
        storeBall[i].vX = storeBall[i].vX * 1.01;
      }
      storeBall[i].vY = vY;
    } else {
      storeBall[i].vX = storeBall[i].vX * 1.01;
      y = h - storeBall[i].radius;
    }
    storeBall[i].y = y;
    storeBall[i].x = storeBall[i].x + storeBall[i].vX;
  }
}
const render = (cxt: CanvasRenderingContext2D, timeStr: string, diffArr: (string|null)[]) => {
  if(!canvasEl.value) return
  const { width, height } =  canvasEl.value
  // 对一个矩形空间内的图像进行一次刷新操作。这里，对整个屏幕进行一次刷新。
  cxt.clearRect(0, 0, width, height);
  cxt.fillStyle = Config.fillStyle;
  let position = (width - minWidth()) / 2 + Config.marginBoth;

  for(let i = 0, l = timeStr.length; i < l; i += 1 ) {
    renderDigit(position, Config.marginTop, timeStr[i], cxt);
    if(diffArr[i]) {
      addBall(position, Config.marginTop, timeStr[i]);
    }
    position = position
      + Config.radius * 2 * (timeStr[i] ===":" ? 4: 7)
      + Config.space * (timeStr[i] ===":" ? 3: 6)
      + Config.nSpace;
  }
}

const animation = (cxt: CanvasRenderingContext2D) => {
  let beforeTime = getTimeStr(Config.time);
  const loop = () => {
    if(!canvasEl.value) return
    const { width, height } =  canvasEl.value;
    const timeStr = getTimeStr(Config.time);
    const diffArr = beforeTime.split('').map((item, index) => {
      return item === timeStr[index] ? null: item;
    })
    render(cxt, timeStr, diffArr);
    renderBall(cxt, width, height);
    beforeTime = timeStr;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
const init = () => {
  if(!canvasEl.value) return;
  const cxt = canvasEl.value.getContext('2d');
  if(!cxt) return;
  animation(cxt);
};

onMounted(() => {
  if(!canvasEl.value) return;
  observeResize = new ResizeObserver(() => {
    setCvsStyle();
  });
  observeResize.observe(canvasEl.value);

  init();
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
  max-height: 400px;
}
canvas {
  width: 100%;
  height: 100%;
  background-color: rgb(15, 14, 14);
}
</style>
    