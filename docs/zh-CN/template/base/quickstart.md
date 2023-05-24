---
title: 开始
lang: zh-CN
---

## 目录结构
```
vue-templates
├─ docs
│  ├─ .vitepress   文档配置（目录菜单，全局组件）
│  ├─ examples     范例位置
│  ├─ pubilc       公共资源
│  └─ zh-CN
│  │  └─ component  文档位置
├─ packages
│  ├─ create
│  │  ├─ templates  模板
│  │  └─ outfile.js   
│  ├─ publish

```

## 打包发布
```
cd packages
// 修改版本发布模板
npm run publish:templates
```
