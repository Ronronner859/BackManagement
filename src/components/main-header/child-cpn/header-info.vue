<template>
  <div class="header-info">
    <div class="header-info-operation">
      <span>
        <span class="dot"></span>
        <el-icon><Message /></el-icon>
      </span>
      <span>
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <el-icon><Search /></el-icon>
      </span>
    </div>
    <div class="header-info-user">
      <el-dropdown>
        <span class="header-info-user-info">
          <el-avatar
            :size="30"
            src="https://www.keaitupian.cn/cjpic/frombd/1/253/1774479672/1268119261.jpg"
          />
          <span class="header-info-user-name">Beaky</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogout">
              <el-icon><CircleClose /></el-icon>
              <span>退出登录</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><Setting /></el-icon>
              <span>设置</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Help /></el-icon>
              <span>帮助</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constants'
const router = useRouter()
const handleLogout = () => {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.header-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-info-operation {
  display: inline-block;
  margin-right: 20px;
  span {
    position: relative;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    display: inline-block;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
    i {
      font-size: 20px;
    }
  }
  .dot {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 7px;
    height: 7px;
    background-color: #ff0000;
    border-radius: 100%;
  }
}
.header-info-user {
  display: inline-block;
  margin-right: 20px;
  .header-info-user-info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .header-info-user-name {
      margin-left: 10px;
    }
  }
}
// 修改下拉菜单的样式 css 中的deep
// todo: 后续需要抽离成全局组件
.header-info {
  :global(.el-dropdown-menu__item) {
    line-height: 30px;
    padding: 2px 20px;
  }
}
</style>
