export function isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]'
}

export function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]'
}

export function isNil(x) {
  return x === null || x === undefined
}

export function isString(x) {
  return typeof x === 'string'
}

export function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export function assert(value, message) {
  if (!value) {
    throw new Error(`http options validate: ${message}`)
  }
}
