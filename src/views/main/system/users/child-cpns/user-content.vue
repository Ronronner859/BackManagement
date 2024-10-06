<template>
  <div class="user-content">
    <div class="user-content-header">
      <el-button type="primary" @click="handleAddUser">添加用户</el-button>
    </div>
    <div class="user-content-table">
      <el-table
        :data="users"
        style="width: 100%"
        stripe
        highlight-current-row="true"
        border
      >
        <el-table-column type="selection" width="55" />
        <template v-for="column in columns" :key="column.prop">
          <template v-if="column.prop === 'status'">
            <el-table-column
              :prop="column.prop"
              :label="column.label"
              :width="column.width"
            >
              <template #default="scope">
                <el-tag :type="scope.row.status === 1 ? 'success' : 'danger'">
                  {{ scope.row.status === 1 ? '启用' : '禁用' }}
                </el-tag>
              </template>
            </el-table-column>
          </template>
          <el-table-column
            v-else-if="column.prop === 'created_at'"
            :prop="column.prop"
            :label="column.label"
            :width="column.width"
          >
            <template #default="scope">
              {{ formatTime(scope.row.created_at, 'YYYY-MM-DD HH:mm:ss') }}
            </template>
          </el-table-column>
          <el-table-column
            v-else
            :prop="column.prop"
            :label="column.label"
            :width="column.width"
          />
        </template>
        <el-table-column label="操作" width="170" align="center">
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              @click="handleEdit(scope.row)"
              icon="Edit"
              text
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="handleDelete(scope.row)"
              icon="Delete"
              text
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="user-content-pagination">
        <el-pagination
          :total="total"
          :page-sizes="[10, 20, 30, 40, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :current-page="currentPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSystemStore } from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { formatTime } from '@/utils/format-time'
const columns = ref([
  { prop: 'id', label: 'ID', width: 180 },
  { prop: 'username', label: '用户名', width: 180 },
  { prop: 'address', label: '地址' },
  { prop: 'status', label: '状态' },
  { prop: 'created_at', label: '创建时间' }
])
// 分页

const systemStore = useSystemStore()
const pageSize = ref(10)
const currentPage = ref(1)
fetchUsersList()
// 解构出users和total 计算属性或者storeToRefs
const { users, total } = storeToRefs(systemStore)
// onMounted(async () => {
//   await systemStore.getUsers(0, 10)
//   tableData.value = systemStore.users
// })
const handleSizeChange = (size: number) => {
  pageSize.value = size
  fetchUsersList()
}
const handleCurrentChange = (page: number) => {
  currentPage.value = page
  fetchUsersList()
}
// 发送请求
function fetchUsersList(query: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  systemStore.getUsers({ size, offset, ...query })
}
defineExpose({
  fetchUsersList
})
</script>

<style scoped lang="scss">
.user-content {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
}
.user-content-table {
  margin-top: 20px;
  .el-button {
    margin-left: 0;
    padding: 5px 10px;
  }
}
.user-content-pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
