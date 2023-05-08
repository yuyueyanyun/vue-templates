<template>
  <div class="normal"></div>
</template>
<style scoped>
@property --per {
  syntax: '<length>|<length-percentage>|<percentage>';
  inherits: false;
  initial-value: 25%;
}
.normal {
  width: 80px;
  height: 80px;
  background: conic-gradient(yellowgreen, yellowgreen var(--per),
      transparent var(--per), transparent 100%);
  transition: --per 300ms linear;
}
.normal:hover {
  --per: 61%;
}

</style>
