
export default {
  '/zh-CN/template/': [
    {
      text: '基础',
      items: [
        { text: '安装', link: '/zh-CN/template/base/installation' },
        { text: '快速开始', link: '/zh-CN/template/base/quickstart' },
      ]
    }
  ],
  '/zh-CN/other/': [
    {
      text: 'html',
      items: [
        {
          text: '标签', 
          items: [
            { text: 'iframe', link: '/zh-CN/other/html/iframe', },
          ] 
        },
        { 
          text: '页面元素位置', 
          link: '/zh-CN/other/html/element_possition',
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
          text: 'mask：掩膜', 
          link: '/zh-CN/other/css/mask',
        }
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
            { text: '反射：Reflection', link: '/zh-CN/other/javaScript/reflection', },
            { text: '键的集合对象', link: '/zh-CN/other/javaScript/keyedCollections', },
            { text: "数组", link: "/zh-CN/other/javaScript/array" },
          ] 
        }
      ]
    },
    {
      text: '动画',
      items: [
        { 
          text: 'css', 
          link: '/zh-CN/other/animation/css',
        },
        { 
          text: 'svg', 
          link: '/zh-CN/other/animation/svg',
        },
        {
          text: '滚动',
          link: '/zh-CN/other/animation/scroll',
        }
      ]
    },
    {
      text: 'http',
      items: [
        { 
          text: '请求头', 
          link: '/zh-CN/other/http/header'
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
      ]
    }
  ],
}