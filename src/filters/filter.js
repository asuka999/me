export default {
    login: async function (ctx, nxt) { // todo : help router ... async
      if (ctx.path === '/favicon.ico') return;
      if(!ctx.session.user){
        // ctx.body = {code : 401, msg : 'unauthorized'}
        ctx.throw(401)
      }else await nxt();
    }
}