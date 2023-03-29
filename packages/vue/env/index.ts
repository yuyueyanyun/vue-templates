const env = await import(`./${import.meta.env.VITE_VUE_ENV}.env`);

export default env;