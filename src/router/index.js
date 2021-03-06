import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/CounterWrapper.vue')
  },
  {
    path: '/api',
    name: 'api',
    component: () => import('../views/Apis.vue')
  },
  {
    path: '/loot',
    name: 'loot',
    component: () => import('../views/Lootgen.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
