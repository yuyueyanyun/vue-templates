<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as bodySegmentation  from "@tensorflow-models/body-segmentation";
import type { BodySegmenter } from '@tensorflow-models/body-segmentation'

const videoRef = ref<HTMLVideoElement>();
const maskBoxRef = ref<HTMLDivElement>();
let segmentater: BodySegmenter|null = null;
let frameId:number;

// 根据video元素获取图片二进制数据
const getCanvasImgDataByVideo = (
  video: HTMLVideoElement,
) => {
  if (video) {
    const { clientWidth, clientHeight } = video
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = clientWidth;
    canvas.height = clientHeight;
    ctx!.drawImage(video, 0, 0, clientWidth, clientHeight);
    const imageData = ctx!.getImageData(0, 0, clientWidth, clientHeight);
    return imageData;
  }
  return null;
};
// ImageData对象转DataURL
const imgDataToDataURL = (imgData: ImageData|null) => {
  if (!imgData) {
    return null;
  }
  const { width, height } = imgData;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  ctx!.putImageData(imgData, 0, 0, 0, 0, width, height);
  const dataUrl = canvas.toDataURL("image/png");
  return dataUrl;
};
// 获取人物透明图片
const getPeopleImg = async(imgData: ImageData) => {
  let backgroundDarkeningMask:ImageData|null = null;
  const segmentationConfig = {
    flipHorizontal: false,
    multiSegmentaion: false,
    segmentBodyParts: false, // 如果设置为true，则24个身体部位被分割输出，否则只有前景/背景二进制分割。
    segmentationThreshold: 1,
  };
  if(segmentater) {
    const people = await segmentater.segmentPeople(
      imgData,
      segmentationConfig
    );
    const foregroundColor = { r: 0, g: 0, b: 0, a: 0 };
    const backgroundColor = { r: 0, g: 0, b: 0, a: 255 };
    const drawContour = false;
    const foregroundThresholdProbability = 0.3;
    backgroundDarkeningMask = await bodySegmentation.toBinaryMask(
      people,
      foregroundColor,
      backgroundColor,
      drawContour, // 是否在每个人的分割蒙版周围绘制轮廓
      foregroundThresholdProbability, // 将像素着色为前景而不是背景的最小概率
    );
  }
  return backgroundDarkeningMask;
}
// 加载模型
const loadingModel = async() => {
  const model = bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation;
  const segmenterConfig = {
    runtime: "mediapipe",
    modelType: "landscape",
    solutionPath:  "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation",
  } as const;

  segmentater = await bodySegmentation.createSegmenter(
    model,
    segmenterConfig
  );
}

const setBgImg = async() => {
  let imgData: ImageData|null = null;
  let dataUrl: String|null = null;
  if(segmentater && videoRef.value) {
    imgData = getCanvasImgDataByVideo(videoRef.value)
  }
  if(imgData) {
    const bgImg = await getPeopleImg(imgData);
    dataUrl = imgDataToDataURL(bgImg);
  }
  if(maskBoxRef.value) {
    // @ts-ignore
    maskBoxRef.value.style['-webkit-mask-image'] = `url(${dataUrl})`;
  }
  frameId = window.requestAnimationFrame(setBgImg);
}
const handleEnd = () => {
  cancelAnimationFrame(frameId);
}
onMounted(async () => {
  await loadingModel()
  if(videoRef.value) {
    videoRef.value.play();
    setBgImg();
  }
});

</script>
<template>
  <div class="box">
    <video
      muted="false"
      loop
      autoplay
      controls
      x5-video-player-fullscreen="true"
      x5-video-orientation="landscape"
      x5-playsinline="true"
      playsinline
      webkit-playsinline="true"
      crossOrigin="anonymous"
      ref="videoRef"
    >
      <source src="/video/istockphoto.mp4" />
      不支持video
    </video>
    <div class="mask-box" ref="maskBoxRef">
      <p>Hello, World</p>
      <p>元芳，你怎么看</p>
    </div>
  </div>
</template>
<style scoped>
.box {
  position: relative;
  overflow: hidden;
}
.mask-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-mask-size: auto 100%;
  -webkit-mask-repeat: no-repeat;
}
@keyframes roll {
  0% {
    left: 100%;
  }
  100% {
    transform: translateX(-100%);
    left: 0;
  }
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
  top: 30%;
  left: 100%;
  animation: roll 6s linear 0s infinite;
}
p:last-of-type {
  top: 60%;
  left: 100%;
  animation: roll 6s linear 0.5s infinite;
}
</style>
