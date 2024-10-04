<template>
  <div class="login-account">
    <el-form
      :model="form"
      :rules="rules"
      ref="accountFormRef"
      label-position="left"
      label-width="90px"
      size="large"
      status-icon
    >
      <el-form-item prop="username" :label="$t('username')">
        <el-input
          v-model="form.username"
          :placeholder="$t('username')"
          clearable
        />
      </el-form-item>
      <el-form-item prop="password" :label="$t('password')">
        <el-input
          v-model="form.password"
          :placeholder="$t('password')"
          clearable
          show-password
          type="password"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useLoginStore } from '@/store/login/login'
import type { IForm } from '@/types'
const form = ref<IForm>({
  username: '',
  password: ''
})

const accountFormRef = ref<any>()
const rules = ref<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' }
  ]
})
// 重置表单
const resetForm = () => {
  accountFormRef.value.resetFields()
}
const loginStore = useLoginStore()

//账号登录
const handleLogin = () => {
  accountFormRef.value.validate((valid: boolean) => {
    if (valid) {
      console.log('submit!')
      loginStore.accountLogin(form.value)
      ElMessage.success('登录成功')
      resetForm()
    } else {
      console.log('error submit!')
      ElMessage.error('请输入正确的用户名和密码')
      return false
    }
  })
}
defineExpose({
  handleLogin
})
</script>
<style scoped lang="less"></style>
