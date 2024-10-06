<template>
  <div class="main-header">
    <div class="main-header-left">
      <div class="main-icon" @click="handleFold">
        <el-icon size="24">
          <component :is="isCollapse ? 'Fold' : 'Expand'" />
        </el-icon>
      </div>
      <HeaderCrumb />
    </div>
    <div class="main-header-right">
      <HeaderInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { Fold, Bell, User } from '@element-plus/icons-vue'
import HeaderInfo from './child-cpn/header-info.vue'
import HeaderCrumb from './child-cpn/header-crumb.vue'
const isCollapse = ref(false)
const emit = defineEmits(['updateIsCollapse'])
const handleFold = () => {
  isCollapse.value = !isCollapse.value
  emit('updateIsCollapse', isCollapse.value)
}
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;
}
.main-header-left {
  display: flex;
  align-items: center;
}
.main-icon {
  margin-left: 20px;
}
.main-header-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;
}
</style>
