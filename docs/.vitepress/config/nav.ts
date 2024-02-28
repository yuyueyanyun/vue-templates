import { define } from '../utils/types'

type NavItem = NavItemWithLink | NavItemWithChildren

interface NavItemWithLink {
  text: string
  link: string
  activeMatch?: string
  target?: string
  rel?: string
}

interface NavItemChildren {
  text?: string
  items: NavItemWithLink[]
}

interface NavItemWithChildren {
  text?: string
  items: (NavItemChildren | NavItemWithLink)[]
  activeMatch?: string
}

const nav:NavItem[] = [
  { text: '模板', link: '/zh-CN/template/base/installation' },
  // { text: '深度学习', link: '/zh-CN/deep_learn/picture/tesseract' },
  { text: '文件预览', link: '/zh-CN/file/excel/xlsx' },
  { text: '随笔', link: '/zh-CN/other/visual_design/animation' },
]
export default nav

