const contentConfig = {
  header: {
    title: '角色列表',
    btnText: '添加角色'
  },
  table: {
    columns: [
      { prop: 'id', label: 'ID', width: 180 },
      { prop: 'username', label: '用户名', width: 180 },
      { prop: 'address', label: '地址' },
      { prop: 'status', label: '状态' },
      { prop: 'created_at', label: '创建时间' }
    ]
  },
  pagination: {
    total: 0,
    pageSize: 10,
    currentPage: 1
  }
}

export default contentConfig
