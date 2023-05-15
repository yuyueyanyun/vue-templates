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
<style scoped lang="scss">
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdown {
  position: relative;
  width: fit-content;
  border: 1px solid #ccc;
  span {
    cursor: pointer;
    padding: 4px 8px;
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
    li {
      cursor: pointer;
      padding: 0 8px;
      white-space: nowrap;
      &:hover {
        background-color: #ccc;
      }
    }
  }
  &:hover ul{
    transform: rotateX(0deg);
  }
}

</style>
