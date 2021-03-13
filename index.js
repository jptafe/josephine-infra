import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
Import login from './components/Login/login.vue'
import signup from './components/Login/signup.vue'


const routes = [
  {
    path: '/views/Home.vue',
    name: 'home',
    component: Login
  },
  {
    path: './components/Login/signup.vue',
    name: 'signup',
    component: Signup
  },
  {
    path: './components/Login/forgotPassword.vue',
    name: 'forgotPassword',
    component: ForgotPassword
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
