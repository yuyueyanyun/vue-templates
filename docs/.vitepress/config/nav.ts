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
  { text: '模板', link: '/zh-CN/template/installation' },
  { text: '其它', link: '/zh-CN/other/reader' },
]
export default nav

