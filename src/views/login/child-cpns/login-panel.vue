<template>
  <div class="login-panel">
    <h1 class="login-title text-2xl font-bold">
      Beaky CMS ({{ $t('BackendManagementSystem') }})
      <sub class="text-sm text-gray-500" style="color: skyblue"
        >welcome login Beaky CMS</sub
      >
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
          <template #label>
            <span class="custom-tabs-label">
              <el-icon>
                <User />
              </el-icon>
              <span> {{ $t('account') }}</span>
            </span>
          </template>
          <login-account ref="accountFormRef" />
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
    <div class="login-remember">
      <el-checkbox v-model="rememberMe" @change="handleRememberMe">{{
        $t('remember')
      }}</el-checkbox>
      <div class="flex items-center gap-5">
        <el-link type="primary">{{ $t('forget') }}</el-link>
        <el-link type="primary" @click="handleRegisterLink()">注册</el-link>
      </div>
    </div>
    <div class="login-submit">
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
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
import loginScan from './login-scan.vue'
import { useRouter } from 'vue-router'
import { localCache } from '@/utils/cache'
const router = useRouter()

const activeName = ref<'account' | 'phone'>('account')
const rememberMe = ref<boolean>(false)

const accountFormRef = ref<InstanceType<typeof loginAccount>>()
const phoneFormRef = ref<InstanceType<typeof loginPhone>>()

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

const handleLogin = (value: 'account' | 'phone' | 'scan') => {
  if (value === 'account') {
    // 可选链操作符 如果accountFormRef.value为空，则不执行handleLogin方法
    accountFormRef.value?.handleLogin()
  } else if (value === 'phone') {
    phoneFormRef.value?.handlePhoneLogin()
  } else {
    console.log('扫码登录')
  }
}

const handleRegisterLink = () => {
  router.push('/register')
}

const handleRememberMe = (value: boolean) => {
  if (value) {
  } else {
  }
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
.custom-tabs-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
}
.login-remember {
  display: flex;
  justify-content: space-between;
}
.login-submit {
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
