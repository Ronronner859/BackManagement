const searchConfig = {
  formItems: [
    {
      prop: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称',
      initialValue: '111'
    },
    {
      prop: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍',
      initialValue: ''
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
