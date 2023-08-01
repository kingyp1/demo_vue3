<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <el-button type="primary">Primary</el-button>
  <h1>SVG测试</h1>
  <svg style="width:20px;height:20px;">
    <use xlink:href="#icon-phone" fill="red"></use>
  </svg>
</template>

<style scoped>
</style>
