import Vue from 'vue'
import VueRouter from 'vue-router'
import CurrentWeatherView from '../views/CurrentWeatherView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'currentWeatherView',
    component: CurrentWeatherView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router