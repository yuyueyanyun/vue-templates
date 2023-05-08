
import 'normalize.css'
import 'element-plus/dist/index.css'
import './index.css'

// for dark mode
import Layout from './components/layout.vue'
import VPDemo from './components/vp-demo.vue'
import VPMirror from './components/vp-mirror.vue'
import codepen from './components/codepen.vue'
export { default as NotFound } from './components/404.vue'

import type { Component } from 'vue'

export default Layout
export const globals: [string, Component][] = [
    ['Demo', VPDemo],
    ['Mirror', VPMirror],
    ['LqCodepen', codepen]
]
