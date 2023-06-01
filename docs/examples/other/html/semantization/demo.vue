<template>
<iframe
  height="300"
  width="100%"
  :srcdoc='`<!doctype html>
  <html lang="zh">
    <head>
      <title>避免使用一两个单词的标题。对于词汇表或参考样式的页面，请使用描述性短语或术语。不超过55字符</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8″>
      <meta name="keywords" content="向搜索引擎说明你的网页的关键词"> 
      <meta name="description" content="告诉搜索引擎你的站点的主要内容" >
      <meta name="author" contect="你的姓名">
      <meta name="robots" contect= "all">
      <style>
        p {
          margin: 0;
          padding: 0;
        }
        header {
          height: 40px;
          background-color: rgb(255, 108, 108);
        }
        nav {
          background-color: rgb(103, 255, 82);
        }
        main {
          display: grid;
          grid-template-columns: 60px 1fr 60px;
        }
        aside {
          position: sticky;
          top: 0;
          height: 60px;
          background-color: rgb(108, 186, 255);
        }
        article {
          height: 400px;
          background-color: rgb(235, 255, 143);
        }
        footer {
          background-color: rgb(103, 255, 82);
        }
      </style>  
    </head>
    <body>
      <header>头部部分(header)</header>
      <nav>导航栏(nav)</nav>
      <main>
        <aside>左侧边栏(aside)</aside>
        <article>中间主体部分(article)</article>
        <aside>右侧边栏(aside)</aside>
      </main>
      <footer>页脚 <p><small>&copy;</small><p></footer>
    </body>
  </html>`'
  sandbox="allow-modals allow-pointer-lock allow-popups allow-scripts allow-top-navigation-by-user-activation"
></iframe>
</template>