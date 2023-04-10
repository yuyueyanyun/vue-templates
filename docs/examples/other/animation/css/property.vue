<template>
  <div class="normal"></div>
</template>
<style scoped>
/* length,number,percentage,length-percentage,color,image,url,integer,angle,time,resolution
    transform-list,transform-function,custom-ident (a custom identifier string) 
*/

@property --per {
    syntax: '<length>|<length-percentage>|<percentage>';
    inherits: false;
    initial-value: 25%;
}
.normal {
    width: 200px;
    height: 200px;
    background: conic-gradient(yellowgreen, yellowgreen var(--per), 
        transparent var(--per), transparent 100%); 
    transition: --per 300ms linear;
}
.normal:hover {
    --per: 61%;
}

</style>
  