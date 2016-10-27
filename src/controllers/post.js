import post from '../services/post'
import {POST_TYPES} from '../../constants'
import {LOCK_REG} from '../../constants'

export default {
  async post(ctx) {
    const {type = POST_TYPES.markdown, title, content} = ctx.request.body
    const lock = type === POST_TYPES.markdown && LOCK_REG.test(content)

    if (type === POST_TYPES.photo) {
      if (!content.length) {
        ctx.throw(400, 'photo param err')
      }
    } else if (!lock && !title) {
      ctx.throw(400, 'markdown param err')
    }

    const rs = await post.create({type, title, content, lock})
    ctx.body = rs
  },

  async get(ctx) {
    const {id, sort, limit, offset, ...query} = ctx.query
    query._id = id
    const rs = query._id ? await post.get(query) : await post.query(query, {sort, limit, offset})
    ctx.body = rs
  },

  async delete(ctx) {
    const {id, ...query} = ctx.request.body
    if (!id) {
      ctx.throw(400, 'missing id')
    }
    query._id = id
    var rs = await post.delete(query)
    if (!rs) {
      ctx.throw(500, 'unknow error')
    }
    ctx.status = 204
  },

  async put(ctx) {
    const {id, title, content} = ctx.request.body
    if (!id || !(title || content)) {
      ctx.throw(400, 'missing params')
    }
    const rs = await post.update({_id: id}, {title, content})
    if (!rs) return new Error('error in update post')
    ctx.body = rs
  }
}
