<template>
  <div class="user-search">
    <el-form
      :model="searchForm"
      ref="searchFormRef"
      size="small"
      label-width="80px"
    >
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="searchForm.username"
              placeholder="请输入用户名"
              clearable
              @keyup="handleSearch"
              @clear="handleReset"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              v-model="searchForm.realname"
              placeholder="请输入真实姓名"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="手机号" prop="cellphone">
            <el-input
              v-model="searchForm.cellphone"
              placeholder="请输入手机号"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="部门" prop="departmentId">
            <el-input
              v-model="searchForm.departmentId"
              placeholder="请选择部门"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="状态" prop="enable">
            <el-select v-model="searchForm.enable" placeholder="请选择状态">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="user-search-btns">
      <el-button type="primary" @click="handleSearch">
        <template #icon>
          <el-icon>
            <Search />
          </el-icon>
        </template>
        搜索
      </el-button>
      <el-button type="default" icon="Refresh" @click="handleReset">
        重置
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const searchForm = ref({
  username: '',
  realname: '',
  cellphone: '',
  departmentId: '',
  enable: 1,
  createAt: ''
})
const emit = defineEmits(['handleQuerySearch', 'resetSearchForm'])
const searchFormRef = ref<InstanceType<typeof ElForm>>()
const handleSearch = () => {
  emit('handleQuerySearch', searchForm.value)
}
/**
 * 重置
 */
const handleReset = () => {
  // Object.keys(searchForm.value).forEach((key) => {
  //   searchForm.value[key] = ''
  // })
  searchFormRef.value?.resetFields()
  emit('resetSearchForm')
}
</script>

<style scoped>
.user-search {
  padding: 20px;
  background-color: #fff;
}
.user-search-btns {
  /* display: flex;
  justify-content: flex-end; */
  text-align: right;
}
</style>
