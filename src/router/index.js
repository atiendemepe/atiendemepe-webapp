import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '@/views/Profile.vue'
import Join from '@/views/Join.vue'

import auth from '../service/auth'

import { orderJournalRoutes } from '@/views/journals/order'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/join',
    name: 'join',
    component: Join
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  ...orderJournalRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['login', 'join']
  console.log('before route')
  if (publicPages.includes(to.name)) {
    console.log('public page, continue')
    next()
    return
  }
  if (auth.isLoggedIn()) {
    console.log('isLoggedIn, continue')
    next()
    return
  }
  console.log('go to login')
  router.push({
    name: 'login',
    query: { redirect: to.fullPath }
  })
})

export default router
