<template>
  <div class="user-content">
    <div class="user-content-header">
      <el-button type="primary" @click="handleAddUser">
        {{ props.contentConfig.header.btnText }}
      </el-button>
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
        <template
          v-for="column in props.contentConfig.table.columns"
          :key="column.prop"
        >
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
          <el-table-column v-else v-bind="column" />
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
          :total="props.contentConfig.pagination.total"
          :page-sizes="[10, 20, 30, 40, 50]"
          :page-size="props.contentConfig.pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :current-page="props.contentConfig.pagination.currentPage"
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

interface Props {
  contentConfig: {
    header: {
      title: string
      btnText: string
    }
    table: {
      columns: any[]
    }
    pagination: {
      total: number
      pageSize: number
      currentPage: number
    }
  }
}

const props = defineProps<Props>()

const columns = ref(props.contentConfig.table.columns)
// 分页
const systemStore = useSystemStore()
const pageSize = ref(props.contentConfig.pagination.pageSize)
const currentPage = ref(props.contentConfig.pagination.currentPage)
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
const handleDelete = (row: any) => {
  systemStore.deleteUser(row.id)
}
const handleEdit = (data: any) => {
  emit('handleEdit', data)
}
const emit = defineEmits(['handleAddUser', 'handleEdit'])
const handleAddUser = () => {
  emit('handleAddUser')
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
