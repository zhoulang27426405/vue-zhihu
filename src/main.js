// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
import auth from './auth'

import navigation from '@/components/navigation'
import notice from '@/components/notice'
import dropdown from '@/components/dropdown'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(auth)

Vue.component('navigation', navigation)
Vue.component('notice', notice)
Vue.component('dropdown', dropdown)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
