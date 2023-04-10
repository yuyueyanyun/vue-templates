import nav from './nav'
import sidebar from './sidebar'
import mdPlugin from './plugins'

module.exports =(e) => {
  return {
    title: 'yuyue',
    description: '文档', 
    author: "lei",
    port: '8080',
    base: e.mode === 'production'? '/vue-templates/': '/',
    themeConfig: {
      smoothScroll: true,
      lineNumbers: true,
      nav,
      sidebar,
    },
    markdown: {
      lineNumbers: true,
      config: (md) => mdPlugin(md),
    },
    vue: {
      template: {
        ssr: true,
        compilerOptions: {
          directiveTransforms: [],
        },
      },
    },
  }
}