import { isString, isFunction, assert, hasOwnProperty } from './utils'

const REQUEST_TYPES = ['form', 'formData', 'json']

const configs = {
  requestType: {
    required: false,
    default: 'json',
    validate(value) {
      assert(isString(value), 'requestType must be string')
      assert(REQUEST_TYPES.includes(value), `The config requestType must one of ${REQUEST_TYPES.join('、')}, but got ${value}`)
    }
  },
  handleError: {
    required: true,
    validate(value) {
      assert(isFunction(value), `The config handleError must be function, but got ${value}`)
    }
  },
}

function valdiateOption(config, options, key) {
  if (config.required) {
    assert(hasOwnProperty(options, key), `${key} is required`)
  }

  if (config.validate && hasOwnProperty(options, key)) {
    config.validate(options[key], options)
  }
}

export function mergeDefaultConfig(options) {
  Object.keys(configs).forEach((key) => {
    const config = configs[key]
    if (hasOwnProperty(config, 'default') && !hasOwnProperty(options, key)) {
      options[key] = config.default
    }
    valdiateOption(config, options, key)
  })
  return options
}
