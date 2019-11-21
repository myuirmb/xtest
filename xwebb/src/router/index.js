import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const routes = [
  {
    path: '/',
    component: index,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/lifes',
        name: 'lifes',
        component: () => import('../views/lifes')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/contact')
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('../views/message')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',   //history
  base: process.env.BASE_URL,
  routes
})

export default router
