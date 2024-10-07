<template>
  <div class="users">
    <page-search
      :searchConfig="searchConfig"
      @handleQuerySearch="handleQuerySearch"
      @resetSearchForm="resetSearchForm"
    />
    <user-content
      ref="userContentRef"
      @handleAddUser="handleAddUser"
      @handleEdit="handleEdit"
    />
    <user-drawer ref="userDrawerRef" />
  </div>
</template>

<script setup lang="ts">
// import UserSearch from './child-cpns/user-search.vue'
import PageSearch from '@/components/page-search/page-search.vue'
import UserContent from './child-cpns/user-content.vue'
import { ref } from 'vue'
import UserDrawer from './child-cpns/user-drawer.vue'
import searchConfig from './config/search.config'
const userContentRef = ref<InstanceType<typeof UserContent>>()
const userDrawerRef = ref<InstanceType<typeof UserDrawer>>()
const handleQuerySearch = (query: any) => {
  userContentRef.value?.fetchUsersList(query)
}
const resetSearchForm = () => {
  userContentRef.value?.fetchUsersList()
}
const handleAddUser = () => {
  userDrawerRef.value?.openDrawer(null, true)
}
const handleEdit = (data: any) => {
  console.log(data)
  userDrawerRef.value?.openDrawer(data, false)
}
</script>

<style lang="scss" scoped>
.users {
  border-radius: 20px;
  overflow: hidden;
}
</style>
