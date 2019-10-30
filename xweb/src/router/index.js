import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import cont from '../views/cont.vue'
const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: cont,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('../views/home.vue')
                },
                {
                    path: 'lifes',
                    name: 'lifes',
                    component: () => import('../views/lifes.vue')
                },
                {
                    path: 'users',
                    name: 'users',
                    component: () => import('../views/users.vue')
                },
                {
                    path: 'msg',
                    name: 'msg',
                    component: () => import('../views/msg.vue')
                },
                {
                    path: 'my',
                    name: 'my',
                    component: () => import('../views/my.vue')
                }
            ]
        }
    ]
})

export default router