import { RouteRecordRaw } from 'vue-router'

/**
 * 加载所有本地路由
 * @returns 本地路由
 */
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
/**
 *
 * @param menu 菜单
 * @param localRoutes 本地路由
 * @param routes 路由
 */

function addRoutesFromMenu(
  menu: any,
  localRoutes: RouteRecordRaw[],
  routes: RouteRecordRaw[]
) {
  for (const subMenu of menu.children) {
    const route = localRoutes.find((item) => item.path === subMenu.path)
    if (route) {
      // 如果路由表中没有这个菜单的路由，则添加一个重定向到这个菜单的路由
      if (!routes.find((item) => item.path === menu.path)) {
        routes.push({ path: menu.path, redirect: route.path })
      }
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
/**
 * 根据菜单动态添加路由
 * @param userMenu 菜单
 * @returns 路由
 */

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
/**
 * 根据路径找到对应的菜单
 * @param path 路径
 * @param userMenu 菜单
 * @returns 菜单
 */

export function mapPathToMenu(path: string, userMenu: any[]) {
  for (const menu of userMenu) {
    for (const subMenu of menu.children) {
      if (subMenu.path === path) {
        return subMenu
      }
    }
  }
  return null
}

/**
 * 根据路径找到对应的面包屑
 * @param path 路径
 * @param userMenu 菜单
 * @returns 面包屑
 */
interface IBreadcrumb {
  name: string
  path?: string
}
export function mapPathToBreadcrumb(
  path: string,
  userMenu: any[]
): IBreadcrumb[] {
  const breadcrumb: IBreadcrumb[] = []
  for (const menu of userMenu) {
    for (const subMenu of menu.children) {
      if (subMenu.path === path) {
        breadcrumb.push({ name: menu.name, path: menu.path })
        breadcrumb.push({ name: subMenu.name, path: subMenu.path })
        return breadcrumb
      }
    }
  }
  return null
}
