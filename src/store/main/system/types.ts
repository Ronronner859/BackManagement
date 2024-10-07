interface User {
  username: string
  address: string
  created_at: string
}
export interface IState {
  users: User[]
  total: number
  pageList: any[]
  pageTotal: number
}
