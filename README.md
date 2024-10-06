# Beaky-cms

# 基于vite创建 npm init vue@latest

# 项目配置

1. 项目icon https://www.iconfont.cn/home/index https://icon-icons.com/zh/pack/Planets/4217
2. 标题 网站标题
3. 别名
4. 项目环境 格式化工具

# 项目结构 目录划分

# css配置 样式的重置

npm install normalize.css
reset.css

## 路由安装

主页
404
重定向

## 状态管理安装

vuex
pinia

## 组件库安装

element-plus
自动导入

## 请求库安装

axios

npm install axios
npm install @types/axios -D

## vh vw 格式化全局样式

## tailwindcss安装

npm install tailwindcss
npm install -D tailwindcss-animate

全局样式文件输出
npx tailwindcss -i ./src/assets/tailwind/index.css -o ./src/assets/tailwind/output.css --watch

# 国际化

npm install vue-i18n

# 登录模块

1. 登录方式 账号 手机 扫码
2. 登录校验 账号 手机 扫码
3. 登录接口 账号 手机 扫码

# 提示样式引入

插件引入
npm i vite-plugin-style-import -D

# 后台搭建

node + express + mysql + jwt

1. 安装express
2. 安装mysql2
3. 安装bcryptjs
4. 安装jsonwebtoken
5. 安装cors
6. 安装dotenv
7. 安装axios
8. 安装nodemon

# 类型文件

# 缓存

localStorage
sessionStorage

## 缓存工具类

# 抽取常量

# 权限管理 RBAC 怎么设计？

三张表
用户表
角色表
权限表
用户对应的什么角色
角色对应的什么权限

系统管理
角色管理
权限管理
用户管理
菜单管理
资源管理

role based access control

# 布局

1. 左侧菜单
2. 顶部信息
3. 内容

# 左侧菜单

1. 菜单图标
2. 菜单名称
3. 菜单路径
4. 菜单子菜单
5. 菜单展开
6. 菜单折叠
7. 菜单激活

# 顶部信息

1. 用户名
2. 用户头像
3. 用户信息
4. 用户操作
5. 用户退出

# 动态路由

两种方案

# 文件路由自动化工具coderwhy

npm install -g coderwhy
