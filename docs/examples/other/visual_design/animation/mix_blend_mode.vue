<template>
  <ul>
    <li>
      <p>Hellow World</p>
    </li>
  </ul>
</template>
<style scoped>
ul, li {
  list-style: none;
}
ul, li, p {
  margin: 0;
  padding: 0;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit,  minmax(200px, 1fr));
  grid-auto-rows: 100px; 
}
li {
  position: relative;
  background-image: linear-gradient(45deg,#000,#000 50%,#fff 0);
}
p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 4px;
  color: #fff;
  mix-blend-mode: difference;
  animation: move 2s linear 0s infinite alternate;
}
@keyframes move {
  from {
    transform: translateX(-70%);
  }
  to {
    transform: translateX(-30%);
  }
}
</style>
  