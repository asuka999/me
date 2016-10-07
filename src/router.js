import koaRouter from 'koa-router'

import index from './controllers/'
import post from './controllers/post'
import user from './controllers/user'
import filter from './filters/filter'

var router = koaRouter()

router
  .post('/login', user.login)
  .get('/logout', user.logout)
  .get('/token', filter.auth, index.token)
  .get('/posts', post.get)
  .delete('/posts', filter.auth, post.delete)
  .post('/post', filter.auth, post.post)
  .post('/words', filter.auth, user.word)

  .put('/post', filter.auth, post.put)
  .get('/index', index.index)
  .put('/user/profile', filter.auth, user.profile)

export default router
