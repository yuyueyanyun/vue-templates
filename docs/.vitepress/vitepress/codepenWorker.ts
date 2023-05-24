const myWorker = () => {
  return new SharedWorker(`${import.meta.env.BASE_URL}js/worker.js`, 'codepen_work')
};

export default myWorker