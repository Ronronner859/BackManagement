<template>
  <div class="main-menu">
    <div class="main-menu-logo">
      <img src="@/assets/img/logo.svg" alt="logo" />
      <span>Beaky CMS</span>
    </div>
    <div class="main-menu-menu">
      <el-menu
        :default-active="defaultActive"
        :collapse="isShowCollapse"
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
      >
        <template v-for="item in userMenu" :key="item.id">
          <el-sub-menu :index="item.id">
            <template #title>
              <!-- 字符串 == 转成动态组件 -->
              <!-- 对服务器复杂数据进行优化  -->
              <!-- :is="item.icon.split('el-icon-')[1]" -->
              <el-icon>
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="child in item.children" :key="child.id">
              <el-menu-item :index="child.id" @click="handleMenuClick(child)">
                <el-icon>
                  <component :is="child.icon" />
                </el-icon>
                <span>{{ child.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login/login'
import { computed, defineProps } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { firstMenu, mapPathToMenu } from '@/utils/map-menus'
const router = useRouter()
const props = defineProps<{
  isShowCollapse: boolean
}>()
const loginStore = useLoginStore()
const userMenu = loginStore.userMenu
console.log(userMenu)
const handleMenuClick = (child: any) => {
  const path = child.path
  router.push(path)
}
const route = useRoute()
const defaultActive = computed(() => {
  const menu = mapPathToMenu(route.path, userMenu)
  return menu.id + ''
})
</script>

<style lang="scss">
:root {
  --el-menu-text-color: #fff;
  // --el-menu-base-level-padding: 40px;
  --el-menu-bg-color: #071129;
}
</style>
<style scoped lang="scss">
.main-menu {
  height: 100%;
}

.main-menu-logo {
  display: flex;
  align-items: center;
  // justify-content: center;
  margin-left: 20px;
  height: 50px;
  overflow: hidden;
  padding-top: 10px;
  // background-color: #fff;
  span {
    margin-left: 10px;
    color: #fff;
  }
}
.main-menu-logo img {
  width: 30px;
  height: 30px;
}
.main-menu-menu {
  .el-menu {
    background-color: #071129 !important;
  }
  .el-sub-menu {
    background-color: #071129 !important;
    .el-menu-item {
      background-color: #1f2e54 !important;
      color: #ffffff !important;
    }
    .el-menu-item:hover {
      color: #ffffff !important;
      background-color: #00c2fd !important;
    }
    .el-menu-item.is-active {
      background-color: #0767a7 !important;
    }
  }

  .el-sub-menu__title {
    color: #ffffff !important;
  }
  .el-menu-item-group {
    background-color: #071129;
  }
}
</style>
