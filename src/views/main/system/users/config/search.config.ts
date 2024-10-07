const searchConfig = {
  formItems: [
    {
      prop: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      initialValue: 'c'
    },
    {
      prop: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      initialValue: ''
    },
    {
      prop: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码',
      initialValue: ''
    },
    {
      prop: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      initialValue: '',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ]
    },
    {
      prop: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      },
      initialValue: []
    }
  ]
}

export default searchConfig
