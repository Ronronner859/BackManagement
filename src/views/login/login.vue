<template>
  <div class="login">
    <div class="login-box">
      <LoginPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './child-cpns/login-panel.vue'
</script>

<style lang="scss" scoped>
.login {
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
