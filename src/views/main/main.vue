<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="200px" class="aside">
        <main-menu />
      </el-aside>
      <el-container>
        <el-header class="header" height="50px">
          <main-header />
        </el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { MainMenu, MainHeader } from '@/components'
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
}
.aside {
  background-color: #071129;
}
.header {
  background-color: #999e9e;
}
.main {
}
</style>
