import path from 'path'
import { defineConfig } from 'vite'
// import VueMacros from 'unplugin-vue-macros/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from "flexsearch";

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
  {
    find: '@/',
    replacement: `${path.resolve(__dirname, './')}/`,
  },
]

const options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
};

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
      vueJsx(),
      // VueMacros({
      //   setupComponent: false,
      //   setupSFC: false,
      //   plugins: {
      //     vueJsx: vueJsx(),
      //   },
      // }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: ['.vitepress/vitepress/components'],
        allowOverrides: true,
        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver(),
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
      Icons({
        autoInstall: true,
      }),
      MarkdownTransform(),
      SearchPlugin(options),
    ],
    
    optimizeDeps: {
      include: [],
    },
  }
})
