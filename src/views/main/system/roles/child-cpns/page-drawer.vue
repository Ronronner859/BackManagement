<template>
  <div class="user-drawer">
    <el-drawer v-model="drawerVisible" :title="drawerTitle" :size="drawerSize">
      <el-form
        :model="drawerForm"
        :rules="drawerRules"
        ref="drawerFormRef"
        label-position="left"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="drawerForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="isNew">
          <el-input v-model="drawerForm.password" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import { useSystemStore } from '@/store/main/system/system'
const systemStore = useSystemStore()
const drawerVisible = ref(false)
const drawerTitle = ref('添加用户')
const drawerSize = ref('40%')
const drawerForm = ref<any>({
  username: '',
  password: ''
})
const drawerRules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const handleCancel = () => {
  drawerVisible.value = false
}
const handleSubmit = () => {
  drawerVisible.value = false
  if (isNew.value) {
    systemStore.createUserFrom(drawerForm.value)
  } else {
    systemStore.editUserFrom(editData.value.id, editData.value)
  }
}
const isNew = ref(true)
const editData = ref<any>(null)
const openDrawer = (data: any, isEdit: boolean) => {
  drawerVisible.value = true
  isNew.value = isEdit
  if (!isEdit && data) {
    drawerTitle.value = '编辑用户'
    drawerForm.value = data
    editData.value = data
  } else {
    drawerTitle.value = '添加用户'
    for (let key in drawerForm.value) {
      drawerForm.value[key] = ''
    }
    editData.value = null
  }
}
defineExpose({
  openDrawer
})
</script>

<style scoped lang="scss">
.user-drawer {
  .el-form {
    padding: 0 20px;
    .el-form-item {
      margin-bottom: 20px;
    }
  }
}
</style>
