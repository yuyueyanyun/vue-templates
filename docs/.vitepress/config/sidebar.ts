
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
      text: '动画',
      items: [
        { 
          text: 'css', 
          link: '/zh-CN/other/animation/css',
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
          ] 
        },
        { 
          text: '几何体', 
          items: [
            { text: '几何体', link: '/zh-CN/other/three/geometry' },
            { text: '网格组合', link: '/zh-CN/other/three/threeBSP' },
          ] 
        },
      ]
    }
  ],
}