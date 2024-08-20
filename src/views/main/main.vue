<template>
  <div class="main">
    <h1>hje;;p</h1>
    <h1>l222 {{ counterStore.count }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()
</script>

<style lang="scss" scoped></style>
