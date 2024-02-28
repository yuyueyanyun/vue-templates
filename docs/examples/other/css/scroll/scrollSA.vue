<script setup lang="ts">
import { ref } from 'vue';

const lists = Array.from({length: 16}, (v, i) =>  i + 1);
const aligns = ['start', 'end', 'center'] as const;
const value = ref<(typeof aligns)[number]>('start')
const snapTypes = [['x', 'y', 'block', 'inline', 'both'], ['mandatory', 'proximity']]
const typeVal = ref('none');
const typeKey = ref('')
</script>
<template>
  <div>
    <div>
      <h5>{{ `scroll-snap-align: ${value}` }}</h5> 
      <label v-for="item in aligns" :key="item">
        <input 
          v-model="value"
          type="radio" 
          :value="item"
          name="align"
        /> {{ item }}
      </label>
    </div>
    <div>
      <h5>{{ `scroll-snap-type: ${typeVal} ${typeKey}` }}</h5>
      <div v-for="(list, index) in snapTypes" :key="index">
        <label v-for="(item, i) in list" :key="i">
        <input
          v-if="index === 0"
          v-model="typeVal"
          type="radio" 
          :value="item"
          name="typeVal"
        /> 
        <input
          v-else
          v-model="typeKey"
          type="radio" 
          :value="item"
          name="typeKey"
        />{{ item }}
      </label>
      </div>
      
    </div>
    
      
    <div class="box" :style="{
      'scroll-snap-type': `${typeVal} ${typeKey}`
    }">
      <div 
        v-for="item in lists" 
        :key="item"
        class="item" 
        :style="{
          'scroll-snap-align': value
        }"
      >
        {{ item }}
      </div>
    </div>
  </div>
  
</template>
<style scoped>
label+label {
  margin-left: 12px;
}
.box {
  display: grid;
  grid-template-columns: repeat(4, 80%);
  grid-auto-rows: 120px;
  border: 1px solid;
  height: 200px;
  overflow-y: auto;
}
.item {
  border: 1px solid #ccc;
  text-align: center;
}
 </style>
 