<template>
  <div class="users">
    <user-search
      @handleQuerySearch="handleQuerySearch"
      @resetSearchForm="resetSearchForm"
    />
    <user-content ref="userContentRef" />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './child-cpns/user-search.vue'
import UserContent from './child-cpns/user-content.vue'
import { ref } from 'vue'
const userContentRef = ref<InstanceType<typeof UserContent>>()
const handleQuerySearch = (query: any) => {
  userContentRef.value?.fetchUsersList(query)
}
const resetSearchForm = () => {
  userContentRef.value?.fetchUsersList()
}
</script>

<style lang="scss" scoped>
.users {
  border-radius: 20px;
  overflow: hidden;
}
</style>
