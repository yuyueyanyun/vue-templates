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

### 删除分支
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

## tag
**通常用于发布版本。**
```
git tag <tagName>

<!-- 查看标签 -->
git tag
git show <tagName>

<!-- 推送标签 -->
git push origin <tagName>
git push origin --tags  推送所有

<!-- 删除标签 -->
# 删除本地标签
git tag -d <tagName>
# 删除远程标签
git push origin :refs/tags/<tagName>
# 删除所有本地标签
git tag -d $(git tag) 
# 删除远程所有标签
git tag -l | xargs -n 1 git push --delete origin
```

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
* 安全的强制推送
> 使用此参数推送，如果远端有其他人推送了新的提交，那么推送将被拒绝，这种拒绝和没有加 --force 参数时的拒绝是一样的。
```
git push --force-with-lease
```
## log 查看记录

```
git log
git log [--oneline | --graph ]

```
| 参数 | 说明  |
| -- | ------  |
| --oneline | 查看历史记录的简洁的版本。|
| --graph | 查看历史中什么时候出现了分支、合并。以下为相同的命令，开启了拓扑图 |

* 显示分支管理（如：显示删除分支的操作）
```
git reflog show 
```

## reset 回退

```
git reset [--soft | --mixed | --hard] [HEAD]
git reset HEAD^            # 回退所有内容到上一个版本 
git reset 052e             # 回退到指定版本
git reset origin/master    # 将本地的状态回退到和远程的一样
```
| 参数 | 说明  |
| -- | ------  |
| --mixed | 默认，重置暂存区的文件与上一次的提交(commit)保持一致，工作区文件内容保持不变。|
| --soft | 保留工作目录和暂存区中的内容，并把重置 HEAD 所带来的新的差异放进暂存区。|
| --hard | 参数撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有提交信息 |

## revert 回滚
> 是通过额外创建一次提交，来取消分支上指定的某次提交的方式，来实现版本回退的。

```
git revert HEAD   #撤销前一次提交
git revert [HEAD]
```

## cherry-pick 遴选
```
git cherry-pick <commitHash>
```
将指定的提交commitHash，应用于当前分支。

## rebase 变基
```
# -i 打开变基的交互模式
git rebase -i [HEAD]  # 修改编辑commit
git rebase master  # 分支历史看起来像没有经过任何合并一样
```
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
## remote 
### 查看当前远程仓库
```
git remote -v
```
### 添加新的远程仓库
> 保留现有的 origin 远程仓库，新的远程仓库并使用不同的名称：
```
git remote add new-origin https://github.com/yuyueyanyun/vue-templates.git

git push new-origin branch-name
```
### 修改远程仓库的 URL
```
git remote set-url origin https://github.com/yuyueyanyun/vue-templates.git

// 或删除当前远程仓库地址，再添加
git remote remove origin
git remote add origin https://github.com/yuyueyanyun/vue-templates.git
```

## 多ssh-key
>我们在日常工作中会遇到公司有个 gitlab，还有些自己的一些项目放在 github 上。这样就导致我们要配置不同的 ssh-key 对应不同的环境。
* 生成私钥
```
ssh-keygen -t rsa -C 'youremail@yourcompany.com'
```
```
ssh-keygen -t rsa -C 'youremail@your.com'
<!-- 下一步修改地址 -->
id_rsa.github
```
* 添加私钥
1. `ssh-add -l` 来确私钥列表
2. `ssh-add -D` 来清空私钥列表
```
ssh-add ~/.ssh/id_rsa
```
如果执行 ssh-add 时提示 "Could not open a connection to your authentication agent"，可执行一下命令后再执行`ssh-add`

```
ssh-agent bash
```

之后我们需要将生成的密钥对中的公钥里的内容用文本编辑器打开，复制下来，添加到对应的平台上面，比如公司的 GitLab 或者 GitHub 等。

* 新增config 配置
若系统盘用户名下的 .ssh 目录下无 config 文件，那么新建一个 config 文件。该文件没有文件后缀名，类型显示为文件，用记事本等打开进行编辑。

```
# 配置文件参数
# Host : 配置对应的的主机名和 ssh 文件（可以直接填写 ip 地址）
# HostName : 要登录主机的主机名（建议与 Host 一致）
# AddKeysToAgent : 配置是否将生成的密钥添加到 ssh-agent 中
# PreferredAuthentications ：配置登录的验证方式(含密码可自行查询配置方式)
# IdentityFile : 指明上面 User 对应的配置路径
# User : 登录名（如 github 的 username）
# Port: 端口号（默认 22）

# github.com
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile  ~/.ssh/id_rsa.github
User your_email@example.com

# aliyun.com
Host code.aliyun.com
HostName code.aliyun.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
User your_email@example.com
```
> **user.name和user.email 保持和github账号一致**
## 推荐使用
[sourcetree](https://www.sourcetreeapp.com/)