const path = require('path');
const fs = require('fs-extra');

async function inquirer() {
    const {default: inquirer} = await import('inquirer');
    return inquirer
}
const defaultProjectName = "project-name";
const templateList = [{
  name: 'vue3',
  value: 'vue3',
}];

async function overwrite(name) {
  if(fs.existsSync(name)) {
    const {shouldOverwrite} = await (await inquirer()).prompt(
      [
        {
          name: "shouldOverwrite",
          type: "confirm",
          message: `是否强制覆盖 ${name}?`
        },
      ],
    );
    if(!shouldOverwrite) throw new Error(red("\u2716") + " 取消");

  }
}


module.exports = async () => {
  const cwd = process.cwd();
  const {
    projectName,
  } = await (await inquirer()).prompt(
    [
      {
        name: "projectName",
        type: "input",
        message: "Project name:",
        default: defaultProjectName,
      },
    ],
  );

  await overwrite(projectName);

  const {
    templateType,
  } = await (await inquirer()).prompt(
    [
      {
        name: 'templateType',
        type: 'list',
        message: '请选择模版',
        choices: templateList,
      }
    ],
  );
  return {
    projectName,
    templateType,
  }
}
