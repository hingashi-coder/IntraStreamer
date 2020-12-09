import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import notFound from '../views/notFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/:key',
    name: 'Home',
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
