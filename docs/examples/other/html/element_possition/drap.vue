<template>
  <div class="box">
    <div v-drap-directive class="dropdown" ></div>
  </div>
</template>
<script setup>

class Drap {
  static zIndex = 1

  constructor (el, {
    style = {}
  } = {}) {
    this.el = el
    this.x = 0
    this.y = 0
    this.style = style
    this.timeOutEvent = 0
  }

  init () {
    this.setEleStyle(this.style || {})
    this.el.onmousedown = (e) => {
      this.onMouseDown(e)
      if (this.el.setCapture) this.el.setCapture()
    }
  }

  // 样式设置
  setEleStyle (style) {
    Object.keys(style).forEach((key) => {
      this.el.style[key] = style[key]
    })
  }

  // 按下ele
  onMouseDown (e) {
    let zIndex = getComputedStyle(this.el).getPropertyValue('z-index')
    zIndex = Number.isNaN(zIndex) ? 1 : zIndex
    Drap.zIndex = Drap.zIndex > zIndex ? Number(Drap.zIndex) + 1 : Number(zIndex) + 1
    this.setEleStyle({
      zIndex: Drap.zIndex,
      position: 'absolute',
      top: this.el.offsetTop + 'px',
      left: this.el.offsetLeft + 'px'
    })
    this.x = e.offsetX
    this.y = e.offsetY
    this.el.parentNode.onmousemove = (ev) => this.onMouseMove(ev)
    this.el.parentNode.onmouseup = (ev) => this.onMouseUp(ev)
  }

  // 移动move
  onMouseMove (e) {
    let X = e.offsetX - this.x
    let Y = e.offsetY - this.y
    if (e.target !== this.el.parentNode) return
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
    this.el.setAttribute('draggable', true)
  }

  // 释放
  onMouseUp () {
    this.el.parentNode.onmousemove = null
    this.el.parentNode.onmouseup = null
    this.setEleStyle({
      pointerEvents: 'auto'
    })
    this.el.setAttribute('draggable', false)
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
