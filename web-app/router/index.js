import Index from '../pages/Index'
import Edit from '../pages/Edit'
import Posts from '../pages/Posts'
import Post from '../pages/Post'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

export default {
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '/', component: Index},
    {path: '/edit', component: Edit},
    {path: '/edit/:id', component: Edit},
    {path: '/login', component: Login},
    {path: '/posts/:id', component: Post},
    {path: '/posts', component: Posts},
    {path: '*', component: NotFound}
  ]
}
