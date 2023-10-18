<script setup lang="jsx">
import {ref, Transition } from 'vue'
import imgSrc from '/images/visual_design/layout/d327c52a.jpg'

const goods = Array.from({length: 20});
const cartRef = ref(null);
const pageRef = ref(null);

const FlyCop = (props, {slots}) => {
  let show = ref(false);
  let startEl;
  const beforeEnter = (el) => {
    const x = startEl.offsetLeft; // 计算小球移动的X轴的距离
    const y = startEl.offsetTop;// 计算小球移动的y轴的距离
    el.style.width = '32px';
    el.style.height = '32px';
    el.style.transform = `translate(${x}px, ${y}px)`; // 重置小球的位置
  };
  const enter = (el, done) => {
    const { offsetLeft, offsetTop, clientHeight, clientWidth } = cartRef.value;
    el.style.width = '2px';
    el.style.height = '2px';
    el.style.transform = `translate(${offsetLeft + clientWidth/2}px, ${offsetTop + props.scroll.scrollTop + clientHeight / 2}px)`; // 小球移动到购物车
    done();
  };
  const afterEnter = (el) => {
    show.value = false;
  };
  const clickAddToCart = (event) => {
    startEl = event.target;
    show.value = true;
  };
  return <>
  { slots.default({onClick: clickAddToCart}) }
  <Transition 
    onBeforeEnter={ beforeEnter }
    onEnter={ enter }
    onAfterEnter={ afterEnter }
  >
    <div 
      v-show={show.value}
      style={{
        position: 'absolute',
        zIndex: 99999,
        top: 0,
        left: 0,
        transition: 'all 1s',
      }}
    >
      { slots.fly() }
    </div>
  </Transition>
  </>
}


</script>
<template>
  <div class="page" ref="pageRef">
    <div class='header'>
      <div class="cart" ref="cartRef">
        车
      </div>
    </div>
    <FlyCop :scroll="pageRef">
      <template #default="{onClick}">
        <ul>
          <li v-for="(item, index) in goods" :key="index">
            <img class="img" :src="imgSrc">
            <button class="add" type="button" @click.stop="onClick">加入购物车</button>
          </li>
        </ul>
      </template>
      <template #fly>
        <img
          style="width: 100%;"
          :src="imgSrc"
        >
      </template>
    </FlyCop>
  </div>
</template>

<style lang="scss" scoped>
ul, li {
  list-style: none;
}
.page {
  height: 300px;
  overflow: auto;
  position: relative;
}
.header {
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  justify-content: flex-end;
}
.cart {
  width: 24px;
  height: 24px;
  text-align: center;
  background-color: #ccc;
  border-radius: 50%;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
}
.page ul li {
  margin: 0;
}
.img {
  width: 60px;
}
.add {
  padding: 4px 8px;
  border: 1px solid #ccc;
}

</style>
