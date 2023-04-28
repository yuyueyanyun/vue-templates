import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import VueCodemirror from 'vue-codemirror'
// import { oneDark } from '@codemirror/theme-one-dark'
// import { javascript } from '@codemirror/lang-javascript'
// import { basicSetup } from "codemirror";
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout, {  
  // NotFound,  
  globals
} from '../vitepress/index'
import { define } from '../utils/types'

export default define<Theme>({
  ...DefaultTheme,
  // NotFound,
  // Layout: Layout,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
    // app.use(VueCodemirror, {
    //   autofocus: true,
    //   disabled: false,
    //   indentWithTab: true,
    //   tabSize: 2,
    //   placeholder: 'Code goes here...',
    //   extensions: [basicSetup, javascript(), oneDark]
    // })
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
})
