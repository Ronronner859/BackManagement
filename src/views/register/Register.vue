<template>
  <div class="register">
    <div class="register-box">
      <RegisterPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import RegisterPanel from './child-cpns/register-panel.vue'
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  background-image: url('@/assets/img/beak-bg.png');
  background-size: cover;
  background-position: center;
}
</style>
