<template>
  <div class="register-panel">
    <h1 class="register-title text-2xl font-bold">
      Beaky CMS ({{ $t('BackendManagementSystem') }})
      <sub class="text-sm text-gray-500" style="color: skyblue"
        >welcome register Beaky CMS</sub
      >
    </h1>
    <div class="register-tabs">
      <el-tabs
        type="border-card"
        v-model="activeName"
        @tab-click="handleClick"
        class="register-tabs"
        stretch
      >
        <el-tab-pane :label="$t('account')" name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon>
                <User />
              </el-icon>
              <span> {{ $t('account') }}</span>
            </span>
          </template>
          <register-account ref="accountFormRef" />
        </el-tab-pane>
        <el-tab-pane :label="$t('phone')" name="phone">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon>
                <Phone />
              </el-icon>
              <span> {{ $t('phone') }}</span>
            </span>
          </template>
          <login-phone ref="phoneFormRef" />
        </el-tab-pane>
        <!-- 扫码登录  TODO:后续集成-->
        <el-tab-pane :label="$t('scan')" name="scan">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon>
                <Grid />
              </el-icon>
              <span> {{ $t('scan') }}</span>
            </span>
          </template>
          <login-scan ref="scanFormRef" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="register-remember">
      <el-checkbox v-model="rememberMe">{{ $t('remember') }}</el-checkbox>
      <el-link type="primary" @click="handleBack">返回登录</el-link>
    </div>
    <div class="register-submit">
      <el-button
        type="primary"
        class="w-full mt-2 !h-10 !text-lg"
        @click="handleLogin(activeName)"
        >{{ $t('login') }}</el-button
      >
      <el-button
        type="primary"
        class="w-full mt-2 !h-10 !text-lg"
        @click="handleRegister(activeName)"
        >{{ $t('Register') }}</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import RegisterAccount from './register-account.vue'
const router = useRouter()

const activeName = ref<'account' | 'phone'>('account')
const rememberMe = ref<boolean>(false)

const accountFormRef = ref<InstanceType<typeof RegisterAccount>>()

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

const handleRegister = (value: 'account' | 'phone' | 'scan') => {
  if (value === 'account') {
    // 可选链操作符 如果accountFormRef.value为空，则不执行handleLogin方法
    accountFormRef.value?.handleRegister()
  }
}

const handleBack = () => {
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.register-panel {
  width: 420px;
  height: 420px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
}

.register-panel h1 {
  text-align: center;
  font-size: 20px;
}
.register-tabs {
  margin-top: 20px;
}
.custom-tabs-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
}
.register-remember {
  display: flex;
  justify-content: space-between;
}
.register-submit {
  margin-top: 30px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  .el-button {
    width: 60%;
    height: 40px;
    font-size: 16px;
  }
}
</style>
