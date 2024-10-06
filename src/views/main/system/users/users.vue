<template>
  <div class="users">
    <user-search />
    <user-content />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './child-cpns/user-search.vue'
import UserContent from './child-cpns/user-content.vue'
</script>

<style lang="scss" scoped>
.users {
  border-radius: 20px;
  overflow: hidden;
}
</style>
