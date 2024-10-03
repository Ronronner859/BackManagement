<template>
  <div class="login-panel">
    <h1 class="login-title text-2xl font-bold">Beaky CMS (后台管理系统)</h1>
    <div class="login-tabs">
      <el-tabs
        type="border-card"
        v-model="activeName"
        @tab-click="handleClick"
        class="login-tabs"
      >
        <el-tab-pane :label="$t('account')" name="account"> </el-tab-pane>
        <el-tab-pane :label="$t('phone')" name="phone"> </el-tab-pane>
      </el-tabs>
    </div>
    <div class="login-remember">
      <el-checkbox v-model="rememberMe">记住我</el-checkbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref<'account' | 'phone'>('account')
const rememberMe = ref<boolean>(false)
const handleClick = (tab: 'account' | 'phone') => {
  activeName.value = tab
}
</script>

<style lang="scss" scoped>
.login-panel {
  width: 320px;
  height: 320px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
}
.login-panel h1 {
  text-align: center;
  font-size: 20px;
}
.login-tabs {
  // margin-top: 20px;
}
</style>
