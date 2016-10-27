import koaRouter from 'koa-router'

import index from './controllers/'
import post from './controllers/post'
import user from './controllers/user'
import filter from './filters/filter'

var router = koaRouter()

router
  .get('/index', index.index)
  .post('/login', user.login)
  .get('/logout', user.logout)
  .get('/token', filter.auth, index.token)
  .get('/post', post.get)
  .delete('/post', filter.auth, post.delete)
  .put('/post', filter.auth, post.put)
  .post('/post', filter.auth, post.post)
  .get('/words', filter.auth, user.words)

  .put('/user/profile', filter.auth, user.profile)

export default router
