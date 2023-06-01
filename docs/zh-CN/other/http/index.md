---
title: http
lang: zh-CN
outline: deep
---

# http
## header
### Cache-Control 缓存请求指令
> 实现缓存机制。缓存指令是单向的，这意味着在请求中设置的指令，不一定被包含在响应中。

| 值 | 描述 | 示例 |
| ---- | ------------------ | ------ |
|  max-age=\<seconds\> | 设置强制缓存的时间，单位s | Cache-Control: max-age=3600 |
|  max-stale=\<seconds\> |表明客户端愿意接收一个已经过期的资源。可以设置一个可选的秒数，表示响应不能已经过时超过该给定的时间。| Cache-Control: max-stale=3600 |
|  min-fresh=\<seconds\> | 能够容忍的最小新鲜度（缓存时长）。| Cache-Control: min-fresh=600 |
|  no-cache | 设置不强制缓存，每次都去进行协商缓存，确定资源是否有变更，一般用在index.html。 资源会缓存到本地 | Cache-Control: no-cache |
|  no-store | 不进行强制缓存和协商缓存，直接拉取最新的资源。资源不缓存到本地。| Cache-Control: no-store |
|  no-transform | 不得对资源进行转换或转变。Content-Encoding、Content-Range、Content-Type等 HTTP 头不能由代理修改。| Cache-Control: no-transform |
|  only-if-cached | 表明客户端只接受已缓存的响应 | Cache-Control: only-if-cached |

### Content-Type 资源类型
> 告诉客户端实际返回的内容的内容类型。

```
Content-Type: text/html; charset=utf-8
Content-Type: application/json; charset=UTF-8
```
* multipart/form-data需要在表单中进行文件上传时，就需要使用该格式。**new FormData()**

| 文件扩展名 |  Content-Type | 文件类型 |
| ------- | ------------ | -------------- |
| .* | application/octet-stream | 二进制流数据（如常见的文件下载） |
| .aac | audio/aac | AAC音频 |
| .abw | application/x-abiword | AbiWord 文档 |
| .arc | application/x-freearc | 存档文档(多个文件嵌入) |
| .avi | video/x-msvideo | AVI: 音频视频交错 |
| .azw | application/vnd.amazon.ebook | 亚马逊Kindle电子书格式 |
| .bmp | image/bmp | Windows OS/2位图图形 |
| .bz | application/x-bzip | BZip 存档 |
| .bz2 | application/x-bzip2 | BZip2 存档 |
| .csh | application/x-csh | C-Shell 脚本 |
| .css | text/css | CSS |
| .csv | text/csv | CSV |
| .doc | application/msword | Microsoft Word |
| .docx | application/vnd.openxmlformats-officedocument.wordprocessingml.document | Microsoft Word (OpenXML) |
| .eot | application/vnd.ms-fontobject | MS嵌入式OpenType字体 |
| .epub | application/epub+zip | 电子出版物(EPUB) |
| .gif | image/gif | gif图片格式 |
| .html | text/html |  HTML格式 |
| .ico | image/vnd.microsoft.icon | Icon 格式 |
| .ics | text/calendar | iCalendar 格式 |
| .jar | application/java-archive | Java Archive (JAR) |
| .jpg | image/jpeg | jpg图片格式 |
| .jpeg | image/jpeg | jpeg图片格式 |
| .js | text/javascript | JavaScript |
| .json | application/json | JSON数据格式 |
| .jsonld | application/ld+json | JSON-LD 格式 |
| .midi | audio/midi audio/x-midi | 乐器数字接口(MIDI) |
| .midn | audio/midi audio/x-midi | 乐器数字接口(MIDI) |
| .mjs | text/javascript | JavaScript 模块 |
| .mp3 | audio/mpeg | MP3 音频 |
| .mpeg | video/mpeg | MPEG 视频 |
| .mpkg | application/vnd.apple.installer+xml | 苹果安装程序包 |
| .odp | application/vnd.oasis.opendocument.presentation | 	OpenDocument演示文档 |
| .ods | application/vnd.oasis.opendocument.spreadsheet | OpenDocument 电子表格文件 |
| .odt | application/vnd.oasis.opendocument.text | OpenDocument 文本文档 |
| .oga | audio/ogg | OGG 音频 |
| .ogv | video/ogg | OGG 视频 |
| .ogx | application/ogg | 	OGG |
| .otf | font/otf | OpenType 字体 |
| .png | image/png | png图片格式 |
| .pdf | application/pdf | pdf格式 |
| .ppt | application/vnd.ms-powerpoint | Microsoft PowerPoint |
| .pptx | application/vnd.openxmlformats-officedocument.presentationml| pr.esentation | Microsoft PowerPoint (OpenXML) |
| .rar | application/x-rar-compressed | RAR 存档 |
| .rtf | application/rtf | 富文本格式 (RTF) |
| .sh | application/x-sh| ourne shell 脚本 |
| .svg | image/svg+xml| 可缩放矢量图形 (SVG) |
| .swf | application/x-shockwave-flash| 小型web格式 (SWF) or Adobe Flash document |
| .tar | application/x-tar| Tape 归档(TAR) |
| .tiff | image/tiff| Tagged Image File Format (TIFF) |
| .tif | image/tiff| 标记图像文件格式 (TIFF) |
| .ttf | font/ttf| TrueType 字体 |
| .txt | text/plain| Text |
| .vsd | application/vnd.visio| Microsoft Visio |
| .wav | audio/wav| 波形音频格式 |
| .weba | audio/webm| WEBM 音频 |
| .webm | video/webm| WEBM 视频 |
| .webp | image/webp| WEBP 图片 |
| .woff | font/woff| 网页开放字体格式 (WOFF) |
| .woff2 | font/woff2| 网页开放字体格式 (WOFF) |
| .xhtml | application/xhtml+xml| XHTML格式 |
| .xls | application/vnd.ms-excel| Microsoft Excel |
| .xlsx | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet | Microsoft Excel (OpenXML)	 |
| .xml | application/xml | 	XML |
| .xul | application/vnd.mozilla.xul+xml | XUL |
| .zip | application/zip | ZIP |
| .3gp | video/3gpp | 3GPP audio/video 容器 |
| .3g2 | video/3gpp2 | 3GPP2 audio/video 容器 |
| .7z | application/x-7z-compressed | 7-zip |

### Origin
> 请求的来源（协议、主机、端口）
## 请求方法
> 定义了一组请求方法

常用方法 get post put delete

## 状态码
常见的 HTTP 状态码：
* 200 - 请求成功
* 301 - 重定向。资源（网页等）被永久转移到其它URL
* 404 - 请求的资源（网页等）不存在
* 500 - 内部服务器错误

| 分类 | 描述 |
| ---- | -------------- |
| 1** |	信息，服务器收到请求，需要请求者继续执行操作 |
| 2** |	成功，操作被成功接收并处理 |
| 3** |	重定向，需要进一步的操作以完成请求 |
| 4** |	客户端错误，请求包含语法错误或无法完成请求 |
| 5** |	服务器错误，服务器在处理请求的过程中发生了错误 |