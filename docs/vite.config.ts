import path from 'path'
import { defineConfig } from 'vite'
// import VueMacros from 'unplugin-vue-macros/vite'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import {
  projRoot,
} from './internal/paths'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'

import type { Alias } from 'vite'

const alias: Alias[] = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
  },
]

export default defineConfig(async ({ mode }) => {
  return {
    server: {
      host: true,
      fs: {
        allow: [projRoot],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      // VueMacros({
      //   setupComponent: false,
      //   setupSFC: false,
      //   plugins: {
      //     vueJsx: vueJsx(),
      //   },
      // }),
      MarkdownTransform(),
    ],
    optimizeDeps: {
      include: [],
    },
  }
})
