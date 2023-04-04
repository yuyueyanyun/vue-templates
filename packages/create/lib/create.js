const path = require('path');
const fs = require('fs-extra');
const chalk =  import('chalk');
const cwd = process.cwd();
const download = require('../utils/download')
const {run} = require('../utils/execa')

const question = [
    {
        name: 'name',
        type: 'input',
        message: '项目名称',
        default: 'project-name',
    },
]
const questionWrite  = [
    {
        name: 'isOverwrite',
        type: 'list',
        message: '是否强制覆盖已存在的同名目录？',
        choices: [
            {
                name: '覆盖',
                value: true
            },
            {
                name: '不覆盖',
                value: false
            }
        ]
    }
];

class Creator {
    constructor(projectName) {
        this.projectName = projectName;
    }

    // 创建
    async create() {
        const isOverwrite = await this.handleDirectory();
        if(!isOverwrite) return;
        await this.getCollectRepo();
    }
    // 处理是否有相同目录
    async handleDirectory() {
        const targetDirectory = path.join(cwd, this.projectName);
        const {default: inquirer} = await import('inquirer');

        // 如果目录中存在了需要创建的目录
        if (fs.existsSync(targetDirectory)) {
            let { isOverwrite } = await inquirer.prompt(questionWrite);
            if (isOverwrite) {
                await fs.remove(targetDirectory);
            } else {
                console.log(chalk.red.bold('不覆盖文件夹，创建终止'));
                return false;
            }
        };
        return true;
    }
    // 获取可拉取的仓库列表
    async getCollectRepo() {
        const {
            default: ora,
        } = await import('ora')

        const {default: inquirer} = await import('inquirer');

        const loading = ora('正在获取模版信息...');
        loading.start();
        const list = [{
            name: 'vue',
            value: 'https://raw.githubusercontent.com/yuyueyanyun/vue-templates/tree/main/packages/vue',
        }];
        loading.succeed();
        const collectTemplateNameList = list;
        let { choiceTemplateName } = await new inquirer.prompt([
            {
                name: 'choiceTemplateName',
                type: 'list',
                message: '请选择模版',
                choices: collectTemplateNameList
            }
        ]);
        this.downloadTemplate(choiceTemplateName);        
    }
    // 下载仓库
    async downloadTemplate(choiceTemplateName) {
        const {
            default: ora,
        } = await import('ora')
        const loading = ora('正在拉取模版...');
        loading.start();
        //  1. 拼接下载路径
        let requestUrl = `https://raw.githubusercontent.com/yuyueyanyun/vue-templates/main/packages/vue.zip`; 
        //  2. 把资源下载到某个路径上，（后续增加缓存功能）
        await download(requestUrl, './');

        await run(`git`,['clone', requestUrl])
        await run(`npm`,['update', 'axios', '--save'], {cwd: './Fruit-store-mp/miniprogram'});
        loading.succeed();
    }
}


module.exports = async () => {
    const {default: inquirer} = await import('inquirer');
    let { name } = await inquirer.prompt(question);
    const creator = new Creator(name);
    await creator.create();
}