<template>
  <div class="login-scan">
    <div class="login-scan">
      <img src="@/assets/img/Beaky-CMS.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const handleScanLogin = () => {
  console.log('Scan submit!')
}
defineExpose({
  handleScanLogin
})
</script>
<style scoped lang="scss">
.login-scan {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30%;
    height: 30%;
  }
}
</style>
