<template>
  <div class="roles">
    <page-search />
    <page-content ref="pageContentRef" />
    <page-modal />
  </div>
</template>

<script setup lang="ts">
import PageSearch from './child-cpns/page-search.vue'
import PageContent from './child-cpns/page-content.vue'
import PageModal from './child-cpns/page-modal.vue'
</script>

<style lang="scss" scoped></style>
