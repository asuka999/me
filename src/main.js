'use strict'

import path from 'path'

import koa from 'koa'
import serve from 'koa-static'
import session from 'koa-session'
import logger from 'koa-logger'
import convert from 'koa-convert'
import bodyparser from 'koa-bodyparser'

import router from './router'
import config from './config'

var app = new koa();

// static
//var publicFiles = kstatic(path.join(__dirname, 'services'));
//publicFiles._name = 'static /dist';
//app.use(convert(publicFiles));
//app.use('/public', convert(serve(path.join(__dirname, '..', 'vue_blog', 'dist'))));
app.use(convert(serve(path.join(__dirname, '../dist/public'))));

// session
app.keys = config.session.keys;
app.use(convert(session(app)));

// logger
app.use(convert(logger()))



// err catch
app.use(async(ctx, next) => {
    try {
        await next(); // next is now a function
    } catch (err) {
        console.log(err);
        ctx.body = { message: err.message };
        ctx.status = err.status || 500;
    }
})

//before handle
app.use(bodyparser({ 
    onerror: function(err, ctx) {
        ctx.throw('body parse error', 422);
    }
}))
// router
app
.use(router.routes())
.use(router.allowedMethods()); //what ?????


var port = process.env.VCAP_APP_PORT || process.env.PORT ||3000
app.listen(port);
console.log('listen on port')
