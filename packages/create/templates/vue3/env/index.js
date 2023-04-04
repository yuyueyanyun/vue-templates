
const module = import.meta.env.VITE_VUE_ENV;
const {default: env} = await import(`./module/${module}.env.js`);

export default env;