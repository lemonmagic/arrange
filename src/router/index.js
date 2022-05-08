import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue'),
    redirect: '/show',
    children: [
      {
        path: '/show',
        name: 'Show',
        component: () => import('../views/home/Show.vue')
      },
      {
        path: '/guide',
        name: 'Guide',
        component: () => import('../views/home/Guide.vue')
      },
      {
        path: '/increase',
        name: 'Increase',
        meta: {
          active: 0,
        },
        component: () => import('../views/home/Increase.vue'),
        // redirect: '/first',
        // children: [
        //   {
        //     path: '/first',
        //     name: 'Increase',
        //     component: () => import('../components/increase/AddFirst.vue')
        //   },
        //   {
        //     path: '/second',
        //     name: 'Increase',
        //     component: () => import('../components/increase/AddSecond.vue')
        //   },
        //   {
        //     path: '/third',
        //     name: 'Increase',
        //     component: () => import('../components/increase/AddThird.vue')
        //   },
        // ]
      },
      {
        path: '/setting',
        name: 'Setting',
        component:() => import('../views/home/Setting.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
