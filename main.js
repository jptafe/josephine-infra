import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Login from './components/Login/login.vue'
import signup from './components/Login/signup.vue'
import forgot-password from './components/Login/forgot-password.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  BootstrapVue,
  IconsPlugin,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')