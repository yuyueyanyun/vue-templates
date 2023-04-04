const SESSIONEXPIREDMSGINTERVAL = 5 * 1000;
const EXCEPTIONHANDLERQUEUE = []

function getMessagePermit(message) {
  if(EXCEPTIONHANDLERQUEUE.includes(message)){
    return false;
  }else{
    EXCEPTIONHANDLERQUEUE.push(message)
    setTimeout(() => {
      EXCEPTIONHANDLERQUEUE.splice(EXCEPTIONHANDLERQUEUE.findIndex(item=>item === message),1)
    }, SESSIONEXPIREDMSGINTERVAL);
    return true;
  }
}


/**
 * domain 中间件
 * @param  {} instance
 */
export default function apply(instance) {
  instance.interceptors.response.use(null, (error) => {
    const { config , message } = error;
    const { handleError } = config;
    if(getMessagePermit(message) && handleError){
      handleError(error, config, message)
    }
    return Promise.reject(error)
  })
}
