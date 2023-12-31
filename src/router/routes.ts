// 对外暴露的路由
export const constantRoute = [
    {
      // 登录
      path:'/login',
      name:'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      // 首页
      path:'/',
      name:'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      // 404
      path:'/404',
      name:'404',
      component: () => import('@/views/404/index.vue')
    },
    {
      path:'/:pathMatch(.*)*',
      redirect:'/404',
      name:'Any'
    }
  ]