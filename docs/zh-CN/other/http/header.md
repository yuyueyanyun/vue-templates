---
title: 请求头
lang: zh-CN
---

# headers
## Cache-Control 缓存请求指令
实现缓存机制。缓存指令是单向的，这意味着在请求中设置的指令，不一定被包含在响应中。

### 客户端
* Cache-Control: max-age=\<seconds\>； 设置强制缓存的时间，单位s
* Cache-Control: max-stale[=\<seconds\>]；表明客户端愿意接收一个已经过期的资源。可以设置一个可选的秒数，表示响应不能已经过时超过该给定的时间。
* Cache-Control: min-fresh=\<seconds\>；能够容忍的最小新鲜度（缓存时长）。
* Cache-control: no-cache；设置不强制缓存，每次都去进行协商缓存，确定资源是否有变更，一般用在index.html。 资源会缓存到本地
* Cache-control: no-store；不进行强制缓存和协商缓存，直接拉取最新的资源。资源不缓存到本地。
* Cache-control: no-transform；不得对资源进行转换或转变。Content-Encoding、Content-Range、Content-Type等 HTTP 头不能由代理修改。
* Cache-control: only-if-cached；表明客户端只接受已缓存的响应

### 服务端
* Cache-control: must-revalidate；一旦资源过期（比如已经超过max-age），重新加载。
* Cache-control: no-cache；协商缓存验证
* Cache-control: no-store；不使用任何缓存。
* Cache-control: no-transform；
* Cache-control: public；表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存
* Cache-control: private；表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）
* Cache-control: proxy-revalidate；与 must-revalidate 作用相同，但它仅适用于共享缓存（例如代理）
* Cache-Control: max-age=\<seconds\>；
* Cache-control: s-maxage=\<seconds\>；仅适用于共享缓存 (比如各个代理)，私有缓存会忽略它。