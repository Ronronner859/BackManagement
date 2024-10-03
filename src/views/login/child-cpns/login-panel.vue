<template>
  <div class="login-panel">
    <h1 class="login-title text-2xl font-bold">
      Beaky CMS ({{ $t('BackendManagementSystem') }})
    </h1>
    <div class="login-tabs">
      <el-tabs
        type="border-card"
        v-model="activeName"
        @tab-click="handleClick"
        class="login-tabs"
        stretch
      >
        <el-tab-pane :label="$t('account')" name="account">
          <el-form
            :model="form"
            :rules="rules"
            ref="formRef"
            label-width="90px"
          >
            <el-form-item prop="username" :label="$t('username')">
              <el-input v-model="form.username" :placeholder="$t('username')" />
            </el-form-item>
            <el-form-item prop="password" :label="$t('password')">
              <el-input v-model="form.password" :placeholder="$t('password')" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane :label="$t('phone')" name="phone">
          <el-form
            :model="form"
            :rules="rules"
            ref="formRef"
            label-width="86px"
          >
            <el-form-item prop="phone" :label="$t('phone')">
              <el-input v-model="form.phone" :placeholder="$t('phone')" />
            </el-form-item>
            <el-form-item prop="password" :label="$t('password')">
              <el-input v-model="form.password" :placeholder="$t('password')" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!-- 扫码登录  TODO:后续集成-->
        <el-tab-pane :label="$t('scan')" name="scan">
          <div class="login-scan">
            <img src="@/assets/img/Beaky-CMS.png" alt="" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="login-remember">
      <el-checkbox v-model="rememberMe">{{ $t('remember') }}</el-checkbox>
      <el-link type="primary">{{ $t('forget') }}</el-link>
    </div>
    <div class="login-submit">
      <el-button type="primary" class="w-full mt-2 !h-10 !text-lg">{{
        $t('login')
      }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref<'account' | 'phone'>('account')
const rememberMe = ref<boolean>(false)

const form = ref<{
  username: string
  password: string
  phone: string
}>({
  username: '',
  password: '',
  phone: ''
})

const rules = ref<{
  username: { required: boolean; message: string }[]
  password: { required: boolean; message: string }[]
  phone: { required: boolean; message: string }[]
}>({
  username: [{ required: true, message: '请输入用户名' }],
  password: [{ required: true, message: '请输入密码' }],
  phone: [{ required: true, message: '请输入手机号' }]
})
const handleClick = (tab: 'account' | 'phone') => {
  activeName.value = tab
}
</script>

<style lang="scss" scoped>
.login-panel {
  width: 420px;
  height: 420px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
}
.login-panel h1 {
  text-align: center;
  font-size: 20px;
}
.login-tabs {
  margin-top: 20px;
}
.login-remember {
  display: flex;
  justify-content: space-between;
}
.login-submit {
  margin-top: 40px;
  text-align: center;
  .el-button {
    width: 60%;
    height: 40px;
    font-size: 16px;
  }
}
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
