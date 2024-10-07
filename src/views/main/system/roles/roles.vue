<template>
  <div class="roles">
    <page-search :searchConfig="searchConfig" />
    <page-content ref="pageContentRef" />
    <page-drawer />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from './child-cpns/page-content.vue'
import PageDrawer from './child-cpns/page-drawer.vue'
import searchConfig from './config/search.config'
</script>

<style lang="scss" scoped></style>
