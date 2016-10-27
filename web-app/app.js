import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import {sync} from 'vuex-router-sync'
import App from './App.vue'
import routerOpts from './router'
import storeOpts from './store'

Vue.use(Router)
const router = new Router(routerOpts)

Vue.use(Vuex)
const store = new Vuex.Store(storeOpts)

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
