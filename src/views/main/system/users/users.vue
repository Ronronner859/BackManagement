<template>
  <div class="users">
    <user-search />
    <div class="content">
      <h1>用户管理</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserSearch from './child-cpns/user-search.vue'
</script>

<style lang="scss" scoped>
.users {
  border-radius: 20px;
  overflow: hidden;
}
</style>
