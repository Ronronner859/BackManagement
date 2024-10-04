<template>
  <div class="main">
    <h1>hje;;p</h1>
    <h1>l222 {{ counterStore.count }}</h1>
    <el-button @click="handleLogout">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'

const counterStore = useCounterStore()
const router = useRouter()

const handleLogout = () => {
  // 删除token
  localCache.removeCache(LOGIN_TOKEN)
  // 跳转登录页面
  router.push('/login')
}
</script>

<style lang="scss" scoped></style>
