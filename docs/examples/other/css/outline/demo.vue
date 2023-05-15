<template>
  <div>
     <button class="btn1">Click</button>
     <button class="btn2">Click</button>
     <button class="btn3">Click</button>
     <button class="btn4">Click</button>
  </div>
 </template>
 <style scoped>
 div {
   --color: #9b0fff;
   --outline: 2px solid white;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 8px;
 }
 button {
   cursor: pointer;
   text-align: center;
   padding: 8px 16px;
   border: 2px solid var(--color);
   outline: var(--outline);
   transition: outline-offset 200ms ease, outline-width 200ms ease;
 }
 .btn1 {
   color: var(--color);
   outline-offset: -2px;
   outline-color: var(--color)
 }
 .btn1:hover,
 .btn1:focus {
   outline-offset: 2px;
 }
 
 .btn2 {
   color: var(--color);
   outline-offset: -2px;
   outline-color: var(--color)
 }
 .btn2:hover,
 .btn2:focus {
   outline-offset: -6px;
 }
 .btn3 {
   color: var(--color);
   outline-offset: -2px;
   outline-color: var(--color)
 }
 .btn3:hover,
 .btn3:focus {
   outline-offset: -6px;
   outline-width: 8px;
 }
 .btn4 {
   color: white;
   background: var(--color);
 }
 
 .btn4:hover,
 .btn4:focus {
   outline-offset: -6px;
 }
 </style>
 