import ElementPlus from 'element-plus'
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

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
