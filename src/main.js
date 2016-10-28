'use strict'

import path from 'path'

import Koa from 'koa'
import serve from 'koa-static'
import session from 'koa-session'
import logger from 'koa-logger'
import convert from 'koa-convert'
import bodyparser from 'koa-bodyparser'

import router from './router'
import config from './config'
import view from './view'

var app = new Koa()

// static
app.use(serve(path.join(__dirname, '../dist/public')))

// session
app.keys = config.session.keys
app.use(convert(session(app)))

// logger
app.use(convert(logger()))

// err catch
app.use(async(ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log(err)
    ctx.throw(err.status || 500, err.message)
  }
})

// before handle
app.use(bodyparser({
  onerror (err, ctx) {
    ctx.throw(422, 'body parse error' + err)
  }
}))

// router
app
.use(router.routes())
.use(router.allowedMethods())

app.use(view)

const port = process.env.PORT || 3000
app.listen(port)
console.log(`listen on port: ${port}`)
