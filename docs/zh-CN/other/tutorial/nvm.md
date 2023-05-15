---
title: nvm
lang: zh-CN
---

# `node`版本管理器
## 安装
>下载地址：https://github.com/coreybutler/nvm-windows/releases

**以管理员身份运行`cmd`**
<ElRow>
  <img src="/images/tutorial/nvm/cmd.jpg" style="height: 200px;"/>
</ElRow>

## 使用
* 安装指定版本
```
nvm install <version>
```
* 删除已安装的指定版本，语法与 install 用法一致
```
nvm uninstall <version>
```
* 切换使用指定的版本 node
```
nvm use <version>
```
* 列出所有安装的版本
```
nvm ls
```
* 显示当前的版本
```
nvm current
```