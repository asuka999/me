'use strict'
import user from '../services/user'

let words

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

  async word(ctx) {
    const {val, key} = ctx.request.body
    if (!val && !key) {
      ctx.throw(400)
    }

    if (!words) {
      words = await user.words({name: ctx.session.user.name})
    }

    const rs = []
    val && rs.push(...val)
    key && rs.push(...key.split(';').map(k => `${k};`))

    console.log('rs', val, key, rs)
    ctx.body = rs.map(item => words.find(({val, key}) => val === item || key === item))
  },

  profile: async (ctx, nxt) => {
    var p = ctx.request.body
    var rs = await user.update(tmp)
    ctx.body =  {
       data: tmp,
    }
  }
}