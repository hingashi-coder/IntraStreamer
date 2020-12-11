import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import notFound from '../views/notFound.vue'
import movePath from '../views/movePath.vue'
Vue.use(VueRouter)

const routes = [
  {
    name: 'movePath',
    path: '/',
    component: movePath
  },
  {
    name: 'Home',
    path: '/:key',
    component: Home
  },
  {
    name: 'notfound',
    path: '*',
    component: notFound
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
