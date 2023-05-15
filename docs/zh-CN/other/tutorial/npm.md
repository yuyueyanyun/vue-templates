---
title: npm
lang: zh-CN
---

# npm
NPM是随同NodeJS一起安装的包管理工具
> 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
<br>允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
<br>允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

* 创建模块
```
npm init
```
* 安装模块
```
npm install [package]      # 默认安装到dependencies 本地安装
npm install [package] -g   # 全局安装
npm install [package] -f|--force # 强制重新安装
npm install [package] -D|--save-dev   #加到 devDependencies
npm install [package] -O|--save-optional   #加到optionalDependencies
npm install [package]@[version] #指定版本安装
```
* 卸载模块
```
npm uninstall [package]
```
* 更新模块
```
npm update [package]
```
* 发布模块
```
npm publish
```
* 切换源 推荐使用`nrm`快速切换
```
npm config set registry https://registry.npmmirror.com/
# 或者直接在 npm 配置文件修改
npm config edit
```

## 使用`nrm`
是`npm`的镜像源管理工具，使用它可以快速切换`npm`源。
<ElRow>
  <img src="/images/tutorial/npm/nrm.jpg" style="height: 200px;"/>
</ElRow>

* 全局安装
```
npm i -g nrm
```
* 查看版本
```
nrm -V
```
* 查看当前源
```
nrm current
```
* 查看所有源，`*`号表示当前使用的源。
```
nrm ls
```
* 切换源
```
nrm use <registry>
```
* 添加源
```
nrm add <registry> <url>
```
* 删除源
```
nrm del <registry>
```
## `yarn`的安装与使用
是一款 JavaScript 的包管理工具（npm 的代替方案）
* 安装
```
npm install -g yarn
```
* 安装模块
```
yarn install # 安装所有依赖
```
* 添加模块
```
yarn add [package]    #默认安装到dependencies
yarn add [package] -D #加到 devDependencies
yarn add [package] -P #加到 peerDependencies
yarn add [package] -O #加到 optionalDependencies
```
* 升级模块
```
yarn upgrade [package] # 升级到最新版本
yarn upgrade [package]@[version] # 升级到指定版本
yarn upgrade [package]@[tag] # 升级到指定tag
```
* 移除模块
```
yarn remove [package]
```
* 发布包
```
yarn publish
```

## package开发
```json
{
  "name": "package", // 库名
  "version": "1.0.0", // 版本
  "description": "描述",
  "main": "index.js", // 安装该库时，引入指向文件 commonjs 的模块规范
  "module": "index.es.js",  // 安装该库时，引入指向文件 ES Module 的模块规范
  // 防止你手残执行了npm publish
  "private": true,
  // 查找每一个工作区，将这些工作区的的依赖连接到项目根目录下的node_modules中
  "workspaces": [
    "docs",
    "packages"
  ],
  // npm run 命令执行脚本
  "scripts": {
    "docs:dev": "npm run -C docs dev",
    "docs:build": "npm run -C docs build",
  },
  // yarn link 或者 npm link 将包的 bin 文件链接到 node 全局，命令行执行 demo
  "bin": {
    "demo": "outfile.js"
  },
  // 包的作者
  "author": {
    "name" : "xxx",
    "email" : "xxx@gmail.com",
    "url" : "https://github.com/xxx"
  },
  // npm包的关键词，是一个字符串数组，可以帮助其他人在npm搜索列表中发现你的包。
  "keywords": {
    "demo"
  },
  // npm包项目主页地址，可以是托管平台的地址。
  "homepage": "https://github.com/xxx",
  // npm包作为依赖安装时要包括的文件
  "files": [
    "templates",
    "outfile.cjs"
  ],
  // npm包托管的地方，对于想贡献代码的人是有帮助的
  "repository": {
    "type": "git",
    "url": "https://github.com/xxx"
  },
  // 为npm包指定许可证
  "license": "MIT",
  // 所依赖的其他npm包
  "dependencies": { },
  // 构建和测试相关的npm包
  "devDependencies": { },
  // 指定npm包与主npm包的兼容性，当开发插件时是需要的
  "peerDependencies": { },
  // 指定npm包可以使用的Node版本
  "engines": {
    "node": ">=18.0.0"
  }
}
```
