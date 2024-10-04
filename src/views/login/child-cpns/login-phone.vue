<template>
  <div class="login-phone">
    <el-form
      :model="form"
      :rules="rules"
      ref="phoneFormRef"
      label-position="left"
      label-width="86px"
      size="large"
    >
      <el-form-item prop="phone" :label="$t('phone')">
        <el-input v-model="form.phone" :placeholder="$t('phone')" clearable />
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
import type { FormRules, ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
const form = ref<{
  phone: string
  password: string
}>({
  phone: '',
  password: ''
})

const rules = ref<FormRules>({
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{6,16}$/,
      message: '密码长度在 6 到 16 个字符',
      trigger: 'blur'
    }
  ]
})

const phoneFormRef = ref<any>()
const handlePhoneLogin = () => {
  phoneFormRef.value?.validate((valid) => {
    if (valid) {
      console.log('submit!')
      ElMessage.success('登录成功')
    } else {
      ElMessage.error('请输入正确的手机号和密码')
      return false
    }
  })
}
defineExpose({
  handlePhoneLogin
})
</script>
<style scoped lang="less"></style>
