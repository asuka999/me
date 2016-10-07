import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Edit from '../components/Edit'
import Login from '../components/Login'
import Posts from '../components/Posts'
import Post from '../components/Post'
Vue.use(Router)

const routerOpts = {
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '/', component: Index},
    {path: '/edit', component: Edit},
    {path: '/login', component: Login},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: Post}
  ]
}

const router = new Router(routerOpts)
export default router

