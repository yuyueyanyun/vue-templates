
import axios from 'axios'
import { applyInterceptors } from './interceptors'
import { mergeDefaultConfig } from './configs'

const REQUEST_METHODS = ['get', 'post', 'delete', 'put', 'patch']

const interceptors = {
  get(url, params, config={}) {
    return this.request({
      method: 'post',
      url,
      params,
      ...config,
    })
  },
  post(url, data, config={}) {
    return this.request({
      method: 'post',
      url,
      data,
      ...config,
    })
  },
  delete(url, params, config ={}) {
    return this.request({
      method: 'delete',
      url,
      params,
      ...config,
    })
  },
  put(url, data, config ={}) {
    return this.request({
      method: 'put',
      url,
      data,
      ...config,
    })
  },
  patch(url, data, config ={}) {
    return this.request({
      method: 'patch',
      url,
      data,
      ...config,
    })
  },
  request(options) {
    return this.instance.request({
      ...options,
    })
  }
}
/**
 * 请求
 * @param {string} createOpts.requestType - Content-type: json (json/ formData/ form)
 * @param { object } createOpts - axios请求配置
 * @returns proxy
 */
class HttpInstance {
  #http;
  constructor(createOpts = {}) {
    const options = mergeDefaultConfig(createOpts);
    const instance = axios.create(options);
     // 应用拦截器
    applyInterceptors(instance);

    this.#http = {
      instance,
    };

    return new Proxy(this.#http, {
      get(target, prop) {
        if(Object.hasOwn(interceptors, prop)) {
          return Reflect.get(interceptors, prop);
        }
        if (Object.hasOwn(target, prop)) {
          return Reflect.get(target, prop);
        }
        throw new ReferenceError(`Http: Prop name ${prop} does not exist`)
      }
    })
  }
}

export default HttpInstance
