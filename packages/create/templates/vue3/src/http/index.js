import creatHttp from './createHttp.js';
import env from '#/env/index';

console.log(env)
const demoHttp = creatHttp(env.API);

export {
    demoHttp,
};
