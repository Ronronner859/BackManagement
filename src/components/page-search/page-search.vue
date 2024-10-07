<template>
  <div class="user-search">
    <el-form
      :model="searchForm"
      ref="searchFormRef"
      size="small"
      label-width="80px"
    >
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <!-- <component :is="`el-${item.type}`" v-bind /> -->
              <template v-if="item.type === 'input'">
                <el-input
                  v-bind="item.otherOptions"
                  v-model="searchForm[item.prop]"
                  @input="handleInputChange"
                  clearable
                  @clear="handleReset"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="searchForm[item.prop]"
                  @input="handleInputChange"
                  clearable
                  :range-separator="item.otherOptions.rangeSeparator"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-bind="item.otherOptions"
                  v-model="searchForm[item.prop]"
                  @input="handleInputChange"
                  clearable
                  :placeholder="item.placeholder"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
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

// 定义props类型 自定义属性接受的类型
interface IProps {
  searchConfig: {
    labelWidth?: string
    formItems: any[]
  }
}
const props = defineProps<IProps>()
//动态生成表单
const initFormData: any = {}
props.searchConfig.formItems.forEach((item) => {
  initFormData[item.prop] = item.initialValue ?? ''
})
const searchForm = ref(initFormData)
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
