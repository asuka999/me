import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'

Vue.config.debug = true
Vue.config.devtools = true

// this registers `store.state.route`
sync(store, router)

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}
