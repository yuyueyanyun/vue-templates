---
title: git
lang: zh-CN
---

# 分布式版本控制系统
## 安装
### Windows 平台上安装
>下载地址：https://git-scm.com/
```
git config --global user.name "Your Name"
git config --global user.email "email"
```
如果用了 --global 选项，以后你所有的项目都会默认使用这里配置的用户信息。
如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。
## 创建版本库
### git init
```
git init
```
执行完后会在当前目录生成一个 .git 目录。
```
git init newrepo
```
初始化后，会在 newrepo 目录下会出现一个名为 .git 的目录。
### git clone
```
git clone <repo>
```
从现有 Git 仓库中拷贝项目
## 分支管理：branch
### 创建分支
```
git branch (branchname)   创建分支
git checkout (branchname) 切换分支
```
git branch 没有参数时，会列出你在本地的分支。
```
git checkout -b (branchname) origin/master
```
master 分支为基准，创建新分支并立即切换到该分支下
###删除分支
删除本地分支
```
git branch -d (branchname)
```
删除远程分支
```
git push origin --delete (branchname)
git push origin :(branchname)  //推送空分支到远程,删除远程分支另一种实现
```

## 暂时保存：stash 
暂时保存没有提交的工作。运行该命令后，所有没有commit的代码，都会暂时从工作区移除，回到上次commit时的状态。
>解决任务切换问题。如正在进行项目中某一部分的工作，这是又要转到其他分支上进行一些工作。
```
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
```
git pull --rebase origin release/xxxxxx
```
## add

* 添加当前目录的所有变更
```
git add .
```
* 或者添加指定的文件
```
git add ./src/views
```
## commit

```
git commit -m "<type>(scope): <subject>""
```
或者把内容提交至上一个 commit-id 里面
```
git commit --amend
```
| 属性 | 说明 | 必须 |
| ------- | ---------------------------| --- |
| type | 用于说明git commit的类别<br>feat：新功能； fix：修复；docs：文档，style：格式（不影响代码运行的变动）；refactor：重构；perf：优化；test：增加测试；chore：构建过程或辅助工具的变动。 | true |
| scope | 说明 commit 影响的范围，比如数据层、控制层、视图层 | false |
| subject | 简短描述 | true |
## push
* 推送至远端并关联
```
git push --set-upstream origin feature/xxxxxx
```
* 直接推送
```
git push
```
* 强制覆盖**慎用**
```
git push -f
```
## cherry-pick
```
git cherry-pick <commitHash>
```
将指定的提交commitHash，应用于当前分支。
## merge、cherry-pick、rebase
* 放弃操作，回到操作前的样子。
```
--abort 
```
* 退出操作，但是不回到操作前的样子。
```
--quit 
```
* 解决代码冲突后，将修改的文件重新加入暂存区（git add .）执行以下命令继续操作
```
--continue
```
## 多ssh-key
>我们在日常工作中会遇到公司有个 gitlab，还有些自己的一些项目放在 github 上。这样就导致我们要配置不同的 ssh-key 对应不同的环境。
* 生成私钥
```
ssh-keygen -t rsa -C 'youremail@yourcompany.com'
```
```
ssh-keygen -t rsa -C 'youremail@your.com'
```
* 添加私钥
1. `ssh-add -l` 来确私钥列表
2. `ssh-add -D` 来清空私钥列表
```
ssh-add ~/.ssh/id_rsa
```
如果执行 ssh-add 时提示 "Could not open a connection to your authentication agent"，可执行一下命令后再执行`ssh-add`

之后我们需要将生成的密钥对中的公钥里的内容用文本编辑器打开，复制下来，添加到对应的平台上面，比如公司的 GitLab 或者 GitHub 等。

> **user.name和user.name 保持和github账号一致**
## 推荐使用
[sourcetree](https://www.sourcetreeapp.com/)