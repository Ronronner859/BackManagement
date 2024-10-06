<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
// const { locale } = useI18n()
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100vw;
  // background-color: #c4d0d5;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}
</style>
