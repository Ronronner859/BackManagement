import { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  const routes: RouteRecordRaw[] = []
  // 动态添加路由
  // 1. 获取所有菜单
  // 2. 根据菜单动态添加路由
  // 3. 将文件路由添加到路由表
  const localRoutes: RouteRecordRaw[] = []
  // 1.1 读取所有的ts文件
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      eager: true
    }
  )
  // 1.2 将文件路由添加到路由表
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }
  return localRoutes
}
// export let firstMenu: any = null

// export function mapMenusToRoutes(userMenu: any[]) {
//   // 1. 加载所有本地路由
//   const localRoutes = loadLocalRoutes()
//   const routes: RouteRecordRaw[] = []
//   // 2. 根据菜单动态添加路由
//   for (const menu of userMenu) {
//     for (const subMenu of menu.children) {
//       const route = localRoutes.find((item) => item.path === subMenu.path)
//       if (route) {
//         routes.push(route)
//       }
//       if (!firstMenu && route) {
//         firstMenu = subMenu
//       }
//     }
//   }
//   return routes
// }
// 递归添加路由
export let firstMenu: any = null

function addRoutesFromMenu(
  menu: any,
  localRoutes: RouteRecordRaw[],
  routes: RouteRecordRaw[]
) {
  for (const subMenu of menu.children) {
    const route = localRoutes.find((item) => item.path === subMenu.path)
    if (route) {
      routes.push(route)
    }
    if (!firstMenu && route) {
      firstMenu = subMenu
    }
    if (subMenu.children) {
      addRoutesFromMenu(subMenu, localRoutes, routes)
    }
  }
}

export function mapMenusToRoutes(userMenu: any[]) {
  console.log(userMenu)
  // 1. 加载所有本地路由
  const localRoutes = loadLocalRoutes()
  const routes: RouteRecordRaw[] = []
  // 2. 根据菜单动态添加路由
  for (const menu of userMenu) {
    addRoutesFromMenu(menu, localRoutes, routes)
  }
  return routes
}
