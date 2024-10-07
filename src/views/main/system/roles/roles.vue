<template>
  <div class="roles">
    <page-search :searchConfig="searchConfig" />
    <page-content :contentConfig="contentConfig" />
    <page-drawer />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageDrawer from './child-cpns/page-drawer.vue'
import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
</script>

<style lang="scss" scoped></style>
