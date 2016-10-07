import post from '../services/post'
import {POST_TYPES} from '../../constants'

export default {
  async post(ctx) {
    const {type = POST_TYPES.markdown, title, content} = ctx.request.body

    if (type === POST_TYPES.markdown && !title) {
      ctx.throw(400, 'markdown param err')
    }

    if (type === POST_TYPES.photo && !content.length) {
      ctx.throw(400, 'photo param err')
    }

    const rs = await post.create({type, title, content})
    ctx.body = {rs}
  },

  async get(ctx) {
    const {id, ...query} = ctx.query
    query._id = id
    const rs = query._id ? await post.get(query) : await post.query(query)
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

  async patch(ctx) {

  },

  put: async (ctx, nxt) => {
    var pt = ctx.request.body;
    if (!pt._id) {
      return ctx.throw(400, 'missing id');
    }
    var fpt = {_id: pt._id};
    if (!pt.title && !pt.content) {
      return ctx.throw(400, 'no change body');
    }
    var tpt = {};
    pt.title && (tpt.title = pt.title);
    pt.content && (tpt.content = pt.content);
    var rs = await post.update(fpt, tpt);
    if(!rs) return new Error('error in update post')
    tpt._id = fpt._id; 
    ctx.body = {
      code: 200,
      message: 'success',
      data: tpt
    }
  }
}
