
const ContentType = {
  formData: 'multipart/form-data',
  form: 'application/x-www-form-urlencoded; charset=UTF-8',
  json: 'application/json'
}

function toFormData(data) {
  if (origin instanceof FormData) {
    return origin
  }
  return Object.keys(data || {}).reduce((form, key) => {
    form.append(key, data[key])
    return form
  }, new FormData())
}

function toQueryString(data = {}) {
  return Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&')
}

function handlerFactory(contextType, dataTransfor) {
  return (config) => {
    const data = dataTransfor ? dataTransfor(config.data) : config.data
    const headers = { ...(config.headers || {}), 'Content-type': contextType }
    return { ...config, headers, data }
  }
}

/**
 * 请求数据处理
 * requestType, 内置多种数据类型
 * transformRequest, 支持自定义的数据处理函数
 * @param  {} instance
 */
export default function apply(instance) {
  instance.interceptors.request.use((config) => {
    const requestTypeHanlders = {
      json: handlerFactory(ContentType.json),
      form: handlerFactory(ContentType.form, toQueryString),
      formData: handlerFactory(ContentType.formData, toFormData)
    }

    const { requestType, ...restConfig } = config

    const requestTypeHandler = requestTypeHanlders[requestType]
    return requestTypeHandler ? requestTypeHandler(restConfig) : restConfig
  })
}
