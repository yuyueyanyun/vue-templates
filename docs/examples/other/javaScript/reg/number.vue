<template>
  <el-form 
    :inline="true" 
    :model="form" 
    :rules="rules"  
    label-position="top"
  >
    <el-form-item label="2位小数" prop="num1">
      <el-input  v-model="form.num1" />
    </el-form-item>
    <el-form-item label="限制2位小数" prop="num2">
      <el-input
        v-model="form.num2"
        @input="(val) => form.num2 = val.replace(/\D?(\d*)(\.?)(\d{0,2})\d*/g,'$1$2$3')"
      />
    </el-form-item>
</el-form>
</template>
<script setup>
import { reactive } from 'vue';
const form = reactive({
  num1: '',
  num2: '',
})

const validatorNum1 = (rule, value, callback) => {
  // 正负数、2位小数
  const reg = /^[+-]?[0-9]+.?[0-9]{0,2}$/;
  if(!reg.test(value)) {
    callback('最多2位小数');
  }else{
    callback()
  }
}
const rules = reactive({
  num1: [
    {required: true, message: '请输入', trigger: 'blur'},
    {validator: validatorNum1, trigger: 'blur'}
  ]
})
</script>
  