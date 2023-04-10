import path from 'path';

import type { Plugin } from 'vite'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

export function MarkdownTransform(): Plugin {
  return {
    name: 'md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return
      // 文档首页不做处理
      if(id.endsWith('docs/index.md')) return
      if(id.endsWith('zh-CN/index.md')) return

      const relativePath= path.relative('zh-CN', id);
      console.log(relativePath)
      const componentId = relativePath.replace(/.md$/, '').replaceAll('\\', '/');      
      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demos = import.meta.globEager('../../../examples/${componentId}/*.vue')`,
        ],
      }
      return combineMarkdown(code, [combineScriptSetup(append.scriptSetups)]);
    }
  }
}

const combineScriptSetup = (codes: string[]) =>
  `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
  code: string,
  headers: string[],
) => {
  const frontmatterEnds = code.indexOf('---\n\n') + 4
  const firstSubheader = code.search(/\n## \w/)
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

  if (headers.length > 0)
    code =
      code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex);
  return `${code}\n`
}

