<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isShowCollapse ? '60px' : '200px'" class="aside">
        <main-menu :isShowCollapse="isShowCollapse" />
      </el-aside>
      <el-container>
        <el-header class="header" height="50px">
          <main-header @updateIsCollapse="updateIsCollapse" />
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { MainMenu, MainHeader } from '@/components'
import { ref } from 'vue'
const isShowCollapse = ref<boolean>(false)
const updateIsCollapse = (isCollapse: boolean) => {
  isShowCollapse.value = isCollapse
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
}
.main-container {
  height: 100%;
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #071129;
    transition: width 0.3s linear;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-header {
    width: 100%;
    --el-header-padding: 0 !important;
  }
  .el-main {
    padding: 15px;
  }
}
.aside {
  background-color: #071129;
}
.header {
}
.main {
  background-color: #f0f2f5;
}
</style>
