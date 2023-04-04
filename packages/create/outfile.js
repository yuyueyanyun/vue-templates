#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const prompt = require('./prompts/index');
const {
    renderTemplate
} = require('./utils/readerTemplate')
const {
    loading
} = require('./utils/loading')

async function emptyDir(dir) {
    if (!fs.existsSync(dir)) {
      return;
    }
    await fs.remove(dir);
}

async function init() {
    const cwd = process.cwd();
    const { 
        projectName,
        templateType
    } = await prompt();
    const root = path.join(cwd, projectName);

    await loading('loading...', async() => {
        await emptyDir(root);
    })

    fs.mkdirSync(root);

    const templateRoot = path.resolve(__dirname, "templates");
    function render(templateName) {
        const templateDir = path.resolve(templateRoot, templateName);
        renderTemplate(templateDir, root);
    };

    render(templateType);
}

init().catch((e) => {
    console.error(e)
})