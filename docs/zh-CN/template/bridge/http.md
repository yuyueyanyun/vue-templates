---
title: 请求库
lang: zh-CN
outline: deep
---

# @yuyueyanyun/http
http 基于 axios 提供统一的请求层，包含如下特性

支持多种类型的 request type
内置异常处理逻辑
支持实例以及请求级的配置方案
支持 axios 原生所有特性

## 安装
```
npm init @yuyueyanyun/http
yarn init @yuyueyanyun/http
```
## 使用
> 配置将会按优先级进行合并。 请求的 config > 实例的options 

```ts
import Http from '@yuyueyanyun/http';

export default (prefix: string) => Http({
  baseURL: prefix,
  requestType: 'json',
  ignoreError: false,
  handlerHeader: (header, config) => { 
  },
  dataValidator: (resp) => {
  },
  format: (response) => {
  },
  handlerError: (error, message) => {
  },
});
```

### baseURL
> 配置服务的域名或者前缀, 在实际业务中，baseUrl 一般通过构建配置中的环境信息获取。

```ts
Http({
  baseURL: import.meta.env.VITE_PROXY_URL,
  // ...
})
```
### requestType
> 内置 4 种请求类型(form、formData、json、text)，针对不同的请求类型会自动转换 data 并添加对应的 content-type header。使用时只需要传入 requestType。 **默认json**

### ignoreError
> 是否启用 handlerError **默认 false**

### handlerHeader 
> 配置服务的域名或者前缀, 在实际业务中，baseUrl 一般通过构建配置中的环境信息获取。

```ts
Http({
  handlerHeader: (header, config) => {
    return {
      ...header,
      Authorization: ''
    }
  }
})
```
### dataValidator
> 请求成功后，进入数据校验。如果返回有值则进入异常处理。
```ts
Http({
  dataValidator: (resp) => {
    if (resp.data.code === 1) {
      const message = resp.data.msg || errorCode.default;
      return message;
    }
  },
})
```
### format
> 对返回的数据进行统一处理。
```ts
Http({
  format: (resp) => {
    return resp?.data?.data
  },
})
```
### handlerError
> 异常处理：请求异常或者数据业务错误 **当ignoreError:true时不触发**

```ts
Http({
  handlerError: (error, message) => {
    ElMessage({
      message: message,
      type: 'error',
    });
  },
})
```