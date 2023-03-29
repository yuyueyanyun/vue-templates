# yuyue-cli
vue可配置模板

## 第三方支持
commander: 命令行工具
download-git-repo: 用来下载远程模板
inquirer: 交互式命令行工具
ora: 显示 loading 动画
chalk: 修改控制台输出内容样式
log-symbols: 显示出 √ 或 × 等的图标
handlebars.js 用户提交的信息动态填充到文件中

### commander用法
| 方法    | 说明               |
| --------- | ------------------ |
| usage | 设置 usage 值 |
| command | 定义一个命令名字 |
| description | 描述 |
| option |  定义参数，需要设置“关键字”和“描述”，关键字包括“简写”和“全写”两部分，以”,”,”|”,”空格”做分隔。 |
| parse | 解析命令行参数 argv |
| action | 注册一个 callback 函数 |
| version | 终端输出版本号 |

### inquirer用法
|  参数   | 说明               |
| --------- | ------------------ |
| type | 表示提问的类型，包括：input, confirm, list, rawlist, expand, checkbox, password, editor |
| name | 存储当前问题回答的变量 |
| message | 问题的描述 |
| default |  默认值 |
| choices | 列表选项，在某些 type 下可用，并且包含一个分隔符(separator) |
| validate | 对用户的回答进行校验 |
| filter | 对用户的回答进行过滤处理，返回处理后的值 |
| when | 根据前面问题的回答，判断当前问题是否需要被回答 |
| prefix | 修改 message 默认前缀 |
| suffix | 修改 message 默认后缀 |