---
title: git
lang: zh-CN
---

# 分布式版本控制系统
## 安装
### Windows 平台上安装
>下载地址：https://git-scm.com/
```code
git config --global user.name "Your Name"
git config --global user.email "email"
```
如果用了 --global 选项，以后你所有的项目都会默认使用这里配置的用户信息。
如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。
## 创建版本库
### git init
```code
git init
```
执行完后会在当前目录生成一个 .git 目录。
```code
git init newrepo
```
初始化后，会在 newrepo 目录下会出现一个名为 .git 的目录。
### git clone
```code
git clone <repo>
```
从现有 Git 仓库中拷贝项目
## 分支管理：branch
### 创建分支
```code
git branch (branchname)   创建分支
git checkout (branchname) 切换分支
```
git branch 没有参数时，会列出你在本地的分支。
```code
git checkout -b (branchname) origin/master
```
master 分支为基准，创建新分支并立即切换到该分支下
###删除分支
删除本地分支
```code
git branch -d (branchname)
```
删除远程分支
```code
git push origin --delete (branchname)
git push origin :(branchname)  //推送空分支到远程,删除远程分支另一种实现
```

## 暂时保存：stash 
暂时保存没有提交的工作。运行该命令后，所有没有commit的代码，都会暂时从工作区移除，回到上次commit时的状态。
>解决任务切换问题。如正在进行项目中某一部分的工作，这是又要转到其他分支上进行一些工作。
```code
// 暂时保存没有提交的工作
git stash
// 实际应用中推荐给每个stash加一个message，用于记录版本，使用git stash save
git stash save "(message)"

// 恢复最近一次stash的文件
git stash pop
// 列出所有暂时保存的工作
git stash list
// 恢复某个暂时保存的工作，默认使用最近的stash（即stash@{0}）
 git stash apply (stash@{1})
// 丢弃最近一次stash的文件
git stash drop
// 删除所有的stash
git stash clear
```
## pull
以 rebase 的方式拉取远端 origin 的 release/xxxxxx 的代码
```code
git pull --rebase origin release/xxxxxx
```
建议使用rebase