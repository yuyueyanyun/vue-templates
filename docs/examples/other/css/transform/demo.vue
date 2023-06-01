<template>
  <div class="box">
    <div class="dropdown">
      <span>下拉</span>
      <ul>
        <li>hello world</li>
        <li>html</li>
        <li>css</li>
        <li>transform</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdown {
  position: relative;
  width: fit-content;
  border: 1px solid #ccc;
}
.dropdown .span {
  cursor: pointer;
  padding: 4px 8px;
}
.dropdown:hover ul{
  transform: rotateX(0deg);
}
ul {
  position: absolute;
  z-index: 9;
  padding: 4px 0;
  border: 1px solid #ccc;
  background-color: #fff;
  transform: rotateX(90deg);
  transform-origin: top left;
  transition: transform .2s linear;
}
ul li {
  cursor: pointer;
  padding: 0 8px;
  white-space: nowrap;
}
ul li:hover {
  background-color: #ccc;
}
</style>
