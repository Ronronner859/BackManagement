const users = () => import('@/views/main/system/users/users.vue')
export default {
  path: '/main/system/users',
  name: 'users',
  component: users,
  children: []
}
