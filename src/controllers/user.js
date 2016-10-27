'use strict'
import user from '../services/user'

export default {
  async login(ctx) {
    const {username, password} = ctx.request.body
    if (!password || !username) {
      ctx.throw(400)
    }
    if (ctx.session.user) {
      ctx.throw(405, 'already logined')
    }
    const rs = await user.find({name: username})
    ctx.session.views = (ctx.session.views || 0) + 1
    if (rs && password === rs.password) {
      delete rs.password
      ctx.session.user = {name: username}
      ctx.body = rs
    } else {
      ctx.throw(401)
    }
  },

  async logout(ctx) {
    ctx.session.user = null
    ctx.status = 204
  },

  async words(ctx) {
    ctx.body = await user.words({name: ctx.session.user.name})
  },

  profile: async (ctx, nxt) => {
    var p = ctx.request.body
    var rs = await user.update(tmp)
    ctx.body =  {
       data: tmp,
    }
  }
}
