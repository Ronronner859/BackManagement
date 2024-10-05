<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="200px" class="aside">Aside</el-aside>
      <el-container>
        <el-header class="header" height="50px">Header</el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main {
  height: 100%;
}
.main-container {
  height: 100%;
}
.aside {
  background-color: #ddd6d6;
}
.header {
  background-color: #7daeb4;
}
.main {
  background-color: #988888;
}
</style>
