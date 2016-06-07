'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import routerMap from './router'
import App from './components/index'
import './less/main.less'

import vueUtil from './js/vueUtil'
Vue.config.debug = true;
Vue.config.devtools = true;

Vue.use(vueUtil)
Vue.use(Router)
var router = new Router();
router.map(routerMap);

router.start(App, '#app');

// router.start(constructor, el)