<template>
  <div class="header-crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breadcrumb" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { mapPathToBreadcrumb } from '@/utils/map-menus'
import { useLoginStore } from '@/store/login/login'
const route = useRoute()
const loginStore = useLoginStore()
// 根据路径找到对应的面包屑 用computed 或者 watch 监听 依赖的值
const breadcrumb = computed(() => {
  return mapPathToBreadcrumb(route.path, loginStore.userMenu)
})
</script>

<style scoped lang="scss">
.header-crumb {
  margin-bottom: 5px;
  margin-left: 10px;
}
</style>
