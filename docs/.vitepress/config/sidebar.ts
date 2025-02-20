
export default {
  '/zh-CN/template/': [
    {
      text: '模板使用',
      items: [
        { text: '安装', link: '/zh-CN/template/base/installation' },
        { text: '快速开始', link: '/zh-CN/template/base/quickstart' },
      ]
    },
    {
      text: '工具库',
      items: [
        { text: 'http', link: '/zh-CN/template/bridge/http' },
      ]
    },
    {
      text: 'vue',
      items: [
        { text: '使用', link: '/zh-CN/template/vue/base'},
        { text: 'TS', link: '/zh-CN/template/vue/ts'},
        { text: '插件', link: '/zh-CN/template/vue/plugins'},
      ]
    },
    {
      text: 'react',
      items: [
        { text: '使用', link: '/zh-CN/template/react/base'},
      ]
    },
    {
      text: '设计原则',
      link: '/zh-CN/template/principle/component',
    },
    {
      text: '代码注释',
      link: '/zh-CN/template/principle/annotation',
    },
  ],
  // '/zh-CN/deep_learn/': [
  //   {
  //     text: 'html',
  //     item: [   
  //       { text: '识别图片文字', link: '/zh-CN/deep_learn/picture/tesseract' },
  //     ]
  //   }
  // ],
  '/zh-CN/file/': [
    {
      text: '文件预览',
      items: [   
        { 
          text: 'excel',
          items: [
            { text: 'xlsx', link: '/zh-CN/file/excel/xlsx', },
            { text: 'handsontable', link: '/zh-CN/file/excel/handsontable', },
          ]  
       },
      ]
    }
  ],
  '/zh-CN/other/': [
    {
      text: 'html',
      items: [
        {
          text: '语义化布局', 
          link: '/zh-CN/other/html/semantization',
        },
        {
          text: '标签', 
          items: [
            { text: 'iframe', link: '/zh-CN/other/html/iframe', },
            { text: 'canvas', link: '/zh-CN/other/html/canvas', },
            { text: 'svg', link: '/zh-CN/other/html/svg', },
          ] 
        },
      ]
    },
    {
      text: 'css',
      items: [
        {
          text: '基础', 
          link: '/zh-CN/other/css/base',
        },
        {
          text: '布局',
          link: '/zh-CN/other/css/CSS_layout'
        },
        {
          text: 'outline：轮廓线', 
          link: '/zh-CN/other/css/outline',
        },
        {
          text: 'scroll：滚动', 
          link: '/zh-CN/other/css/scroll',
        },
        {
          text: 'filter：滤镜', 
          link: '/zh-CN/other/css/filter',
        },
        {
          text: 'shadow：阴影',
          link: '/zh-CN/other/css/shadow',
        },
        {
          text: 'mix_blend_mode：混合', 
          link: '/zh-CN/other/css/mix_blend_mode',
        },
        {
          text: 'mask：掩膜', 
          link: '/zh-CN/other/css/mask',
        },
        {
          text: 'transform：变形', 
          link: '/zh-CN/other/css/transform',
        },
        {
          text: 'transition：过渡', 
          link: '/zh-CN/other/css/transition',
        },
        {
          text: 'animation：动画', 
          link: '/zh-CN/other/css/animation',
        },
        {
          text: 'property：自定义', 
          link: '/zh-CN/other/css/property',
        },
      ]
    },
    {
      text: 'js',
      items: [
        { 
          text: '正则', 
          link: '/zh-CN/other/javaScript/reg',
        },
        {
          text: '标准内置对象', 
          items: [
            { text: "数值", link: "/zh-CN/other/javaScript/number" },
            { text: "数组", link: "/zh-CN/other/javaScript/array" },
            { text: '反射：Reflection', link: '/zh-CN/other/javaScript/reflection', },
            { text: '键的集合对象', link: '/zh-CN/other/javaScript/keyedCollections', },
          ] 
        },
        { 
          text: '宏任务和微任务', 
          link: '/zh-CN/other/javaScript/task',
        },
        {
          text: '算法', 
          link: '/zh-CN/other/javaScript/algorithm',
        }
      ]
    },
    {
      text: 'webAPI',
      items: [
        { 
          text: '页面元素位置', 
          link: '/zh-CN/other/webAPI/position',
        },
        { 
          text: 'print：打印', 
          link: '/zh-CN/other/webAPI/print',
        },
        {
          text: 'canvas_API',
          link: '/zh-CN/other/webAPI/canvas',
        },
        {
          text: 'requestAnimationFrame',
          link: '/zh-CN/other/webAPI/requestAnimationFrame',
        },
        {
          text: 'ResizeObserver',
          link: '/zh-CN/other/webAPI/ResizeObserver',
        },
        { 
          text: 'scroll：滚动', 
          link: '/zh-CN/other/webAPI/scroll',
        },
        {
          text: 'storage：储存',
          link: '/zh-CN/other/webAPI/storage',
        },
        {
          text: 'EventSource：通信',
          link: '/zh-CN/other/webAPI/EventSource',
        },
        {
          text: 'Worker：工作线程',
          link: '/zh-CN/other/webAPI/Worker',
        },
      ]
    },
    {
      text: 'http',
      items: [
        {
          text: '概述',
          link: '/zh-CN/other/http/index',
        },
        {
          text: 'cookie',
          link: '/zh-CN/other/http/Cookie',
        }
      ]
    },
    {
      text:  "视觉设计",
      items: [
        {
          text: '动画',
          link: '/zh-CN/other/visual_design/animation',
        },
        {
          text: '布局',
          link: '/zh-CN/other/visual_design/layout',
        },
        {
          text: 'AI',
          link: '/zh-CN/other/visual_design/AI',
        },
      ]
    },
    {
      text: 'three.js',
      items: [
        { 
          text: '基础', 
          items: [
            { text: '场景', link: '/zh-CN/other/three/reader' },
            { text: '几何体', link: '/zh-CN/other/three/geometry' },
            { text: '网格组合', link: '/zh-CN/other/three/threeBSP' },
          ] 
        },
      ]
    },
    {
      text: '工具',
      items: [
        { 
          text: 'git', 
          link: '/zh-CN/other/tutorial/git'
        },
        { 
          text: 'nvm', 
          link: '/zh-CN/other/tutorial/nvm'
        },
        { 
          text: 'npm', 
          link: '/zh-CN/other/tutorial/npm'
        },
        { 
          text: 'lodash', 
          link: '/zh-CN/other/tutorial/lodash'
        },
        { 
          text: 'dayjs', 
          link: '/zh-CN/other/tutorial/dayjs'
        },
        { 
          text: 'printjs', 
          link: '/zh-CN/other/tutorial/printjs',
        },
        { 
          text: 'typescript', 
          link: '/zh-CN/other/tutorial/ts',
        },
        { 
          text: 'trackingjs', 
          link: '/zh-CN/other/tutorial/trackingjs',
        },
        {
          text: 'tensorflow',
          link: '/zh-CN/other/tutorial/tensorflow',
        },
        { 
          text: 'browser', 
          link: '/zh-CN/other/tutorial/browser'
        },
        {
          text: 'GrapesJs',
          link: '/zh-CN/other/tutorial/GrapesJs'
        },
        {
          text: 'sfc-loader',
          link: '/zh-CN/other/tutorial/sfc-loader'
        }
      ]
    },
    {
      text: '收藏',
      items: [
        {
          text: '动画', 
          link: '/zh-CN/other/favorite/animation',
        },
      ]
    },
  ],
}