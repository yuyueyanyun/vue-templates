<template>
  <div class="box">
    <div v-drap-directive class="dropdown" ></div>
  </div>
</template>
<script setup>

class Drap {
  static zIndex = 1

  constructor(el, {
    style = {}
  } = {}) {
    this.el = el
    this.x = 0
    this.y = 0
    this.style = style
  }

  init () {
    this.setEleStyle(this.style || {})
    this.el.onpointerdown = (e) => {
      this.onMouseDown(e)
      if (this.el.setPointerCapture) this.el.setPointerCapture(e.pointerId)
    }
  }

  // 样式设置
  setEleStyle(style) {
    Object.keys(style).forEach((key) => {
      this.el.style[key] = style[key]
    })
  }

  // 按下ele
  onMouseDown (e) {
    let zIndex = getComputedStyle(this.el).getPropertyValue('z-index')
    zIndex = Number.isNaN(zIndex) ? 1 : zIndex
    this.zIndex = this.zIndex > zIndex ? Number(this.zIndex) + 1 : Number(zIndex) + 1
    this.setEleStyle({
      zIndex: this.zIndex,
      position: 'absolute',
      top: this.el.offsetTop + 'px',
      left: this.el.offsetLeft + 'px'
    })
    this.x = e.offsetX
    this.y = e.offsetY
    document.onmousemove = (ev) => this.onMouseMove(ev)
    document.onmouseup = (ev) => this.onMouseUp(ev)
    this.el.setAttribute('draggable', false)
  }

  // 移动move
  onMouseMove (e) {
    const {top, left} = this.el.parentNode.getBoundingClientRect()
    let X = e.clientX - left - this.x
    let Y = e.clientY - top - this.y
    if (X < 0) {
      X = 0
    } else if (X > this.el.parentNode.clientWidth - this.el.clientWidth) {
      X = this.el.parentNode.clientWidth - this.el.clientWidth
    }
    if (Y < 0) {
      Y = 0
    } else if (Y > this.el.parentNode.clientHeight - this.el.clientHeight) {
      Y = this.el.parentNode.clientHeight - this.el.clientHeight
    }
    this.setEleStyle({
      left: `${X}px`,
      top: `${Y}px`,
      right: 'auto',
      bottom: 'auto'
    })
  }

  // 释放
  onMouseUp () {
    document.onmousemove = null
    document.onmouseup = null
    this.el.setAttribute('draggable', true)
    if (this.el.setCapture) this.el.setCapture()
  }
}

let drap = null
const vDrapDirective = {
  mounted (el, binding) {
    drap = new Drap(el, binding.value || {})
    drap.init()
  },
  unmounted () {
    drap = null
  }
}

</script>
<style scoped lang="scss">
.box {
  width: 100%;
  height: 100px;
  position: relative;
  background-color: bisque;
}
.dropdown {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #CCC;
  cursor: grab;
}
</style>
