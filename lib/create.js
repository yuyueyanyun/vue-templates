const path = require('path');
const fs = require('fs-extra');
const chalk =  import('chalk');
const cwd = process.cwd();
const download = require('download-git-repo')

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

const run = async(bin, args, opts = {}) => {
    const {
        execa
    } = await import('execa')
    await execa(bin, args, { stdio: 'inherit', ...opts })
}
class Creator {
    constructor(projectName, options) {
        this.projectName = projectName;
        this.options = options;
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
            if (this.options.force) {
                await fs.remove(targetDirectory);
            } else {
                let { isOverwrite } = await inquirer.prompt(questionWrite);
                if (isOverwrite) {
                    await fs.remove(targetDirectory);
                } else {
                    console.log(chalk.red.bold('不覆盖文件夹，创建终止'));
                    return false;
                }
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
            value: 'https://github.com/yuyueyanyun/shop',
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
        console.log('选择了模版：' + choiceTemplateName);
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
        let requestUrl = `https://github.com/yuyueyanyun/Fruit-store-mp.git`; 
        //  2. 把资源下载到某个路径上，（后续增加缓存功能）
        await run(`git`,['clone', requestUrl])
        await run(`npm`,['update', 'axios', '--save'], {cwd: './Fruit-store-mp/miniprogram'});
        loading.succeed();
    }
}


module.exports = async (projectName, options) => {
    const creator = new Creator(projectName, options);
    await creator.create();
}