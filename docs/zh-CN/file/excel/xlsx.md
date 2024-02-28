---
title: xlsx
lang: zh-CN
outline: deep
---

# xlsx
> 操作excel的js工具库

[github](https://github.com/SheetJS/sheetjs)
[官网最新下载](https://cdn.sheetjs.com/)
[文档](https://docs.sheetjs.com/docs/)

```
npm i xlsx
or
yarn add xlsx
```
## 使用
```js
import XLSX from 'xlsx';
```

:::demo

file/excel/xlsx/xlsx

:::
```
### 常用功能
```js
// 读取（本地或网络）文件，并创建一个工作薄
let workbook = XLSX.read(data, opts); // data: ArrayBuffer
// or
let workbook = XLSX.readFile("sheetjs.xlsx"); 
let workbook = XLSX.utils.book_new();
//通过抓取页面中的 HTML TABLE 创建工作表
let workbook = XLSX.utils.table_to_book(dom_element, opts);

//将Array<Object>生成为sheet，其中包含基于对象键自动生成的“标题”。
//header 标题使用指定的字段顺序（默认 Object.keys）
//skipHeader 如果为true，则不会在输出中包含标题行
let worksheet = XLSX.utils.json_to_sheet(Array<Object>, {header, skipHeader: false});
//将Array<Array>生成为sheet
let worksheet = XLSX.utils.aoa_to_sheet(Array<Array>);
//接受一个表 DOM 元素并返回一个类似于输入表的工作薄    
let worksheet = XLSX.utils.table_to_sheet(DOM)

//更新sheet，在对应位置进行覆盖
XLSX.utils.sheet_add_json(worksheet, Array<Object>, {header,skipHeader: true, origin: "A2"});
XLSX.utils.sheet_add_aoa(worksheet, Array<Array>, { origin: "A1" });
XLSX.utils.sheet_add_dom(worksheet, DOM, { origin: -1 });

//将sheet工作表添加到该工作薄中
XLSX.utils.book_append_sheet(workbook, worksheet, "sheet名称");

//将sheet生成对应格式的数据
let svg = XLSX.utils.sheet_to_csv(worksheet)
let html = XLSX.utils.sheet_to_html(worksheet)
let json = XLSX.utils.sheet_to_json(worksheet)


//输出对应的数据编码
//workbook.SheetNames，workbook.Sheets 必传
let data = XLSX.write(workbook, opts);
```

### workbook对象
<ElRow>
  <img src="/images/file/excel/xlsx_wb.jpeg" style="height: 300px;"/>
</ElRow>

### 单元格对象
| Key |	描述 |
| ------- | --------------------------- |
| v |	原始值（有关详细信息，请参阅数据类型部分） |
| w |	格式化文本（如果适用） |
| t |	类型： b布尔值， e错误， n数字， d日期， s文本， z存根 |
| f |	编码为 A1 样式字符串的单元格公式（如果适用） |
| F |	如果公式是数组公式，则封闭数组的范围（如果适用） |
| D |	如果为真，则数组公式是动态的（如果适用） |
| r |	富文本编码（如果适用） |
| h |	富文本的 HTML 呈现（如果适用） |
| c |	与单元格相关的评论 |
| z |	与单元格关联的数字格式字符串（如果需要） |
| l |	单元格超链接对象 ( .Target持有链接， .Tooltip是工具提示） |
| s |	单元格的样式/主题（如果适用）。 ps: 从文件读取时默认不提取行和列属性，写入文件时默认不保留。 选项 cellStyles: true 必须传递给相关的读取或写入函数。|

### read 和 readFile 可选参数

| 选项名称	   | 默认	   |  描述 |
| ------- | ------ | --------------------- |
| raw	        | false	  | 如果为 true，纯文本解析将不会解析值 ** |
| codepage		|         | 如果指定，请在适当时使用代码页 ** |
| cellFormula	| true	  | 将公式保存到 .f 字段 |
| cellHTML	  | true	  | 解析富文本并将 HTML 保存到 .h场地 |
| cellNF	    | false	  | 将数字格式字符串保存到 .z场地 |
| cellStyles	| false	  | 将样式/主题信息保存到 .s场地 |
| cellText	  | true	  | 生成的格式化文本到 .w场地 |
| cellDates	  | false	  | 将日期存储为类型 d（默认为 n) |
| dateNF		  |         | 如果指定，请使用字符串作为日期代码 14 ** |
| sheetStubs	| false	  | 创建类型的单元格对象 z对于存根细胞 |
| sheetRows	  | 0	      | 如果>0，则读取第一个 sheetRows行** |
| bookDeps	  | false	  | 如果为真，则解析计算链 |
| bookFiles	  | false	  | 如果为 true，则将原始文件添加到 book 对象** |
| bookProps	  | false	  | 如果为真，则仅解析足以获取图书元数据** |
| bookSheets	| false	  | 如果为真，则仅解析足以获取工作表名称 |
| bookVBA	    | false	  | 如果为真，则将 VBA blob 复制到 vbaraw场地 ** |
| password	  | “”	    | 如果已定义且文件已加密，请使用密码 ** |
| WTF	        | false 	| 如果为真，则在意外的文件功能上抛出错误** |
| sheets		  |         | 如果指定，则仅解析指定的工作表** |
| PRN	        | false	  | 如果为真，则允许解析 PRN 文件 ** |
| xlfn	      | false	  | 如果属实，请保留 _xlfn.公式中的前缀** |
| FS		      | DSV     | 字段分隔符覆盖 |

### write和 writeFile函数可选项参数

| 选项名称	     | 默认	     |  描述
| ------- | --- | ---------------- |
| cellDates	    | false	    |  将日期存储为类型 d（默认为 n)
| bookSST	      | false	    |  生成共享字符串表**
| bookType	    | "xlsx"	  |  工作簿类型（有关支持的格式，请参见下文）
| sheet	        | ""	      |  单张格式的工作表名称**
| compression	  | false	    |  对基于 ZIP 的格式使用 ZIP 压缩**
| Props		      |           |  写入时覆盖工作簿属性**
| themeXLSX		  |           |  编写 XLSX/XLSB/XLSM 时覆盖主题 XML **
| ignoreEC	    | true	    |  抑制“数字作为文本”错误**
| numbers	      | NUMBERS	  |  导出的有效负载**

### sheet_add_* 中的origin参数

| origin	       | 描述 |
| -------- | ----------------- |
| (cell object)	 | 使用指定单元格（单元格对象） |
| (string)	     | 使用指定单元格（A1 样式单元格） |
| (number >= 0)	 | 从指定行的第一列开始（0-indexed） |
| -1	           | 从第一列开始附加到工作表的底部 |
| (default)	     | 从单元格 A1 开始 |

### sheet_to_json 第二个参数对象
| 选项名称	|  默认	  |  描述 |
| -------- |  ------ | ----------------- |
| raw	      | true	  | 使用原始值 (true) 或格式化字符串 (false) |
| range	    |         | 使用工作表范围 |
| header		|         | 控制输出格式（见下表） |
| dateNF	  | FMT 14	| 在字符串输出中使用指定的日期格式 |
| defval		|         | 使用指定值代替 null 或 undefined |
| blankrows	| **	    |  在输出中包含空行** |
