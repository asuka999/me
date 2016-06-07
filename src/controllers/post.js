import post from '../services/post'

export default {

  get: async (ctx, nxt) => {
    var query = ctx.query;
    var rs = query._id ? await post.get(query) : await post.query(query) 
    ctx.body = {
      code: 200,
      message: 'success',
      data: rs
    }
  },
  post: async(ctx, nxt) => {
    var pt = ctx.request.body;
    pt.type = pt.type || 'markdown'
    if(pt.type == 'markdown' && !pt.title){
      return ctx.throw(400, 'markdown param err');
    }
    if(pt.type == 'photo' && !pt.content.length) {
      return ctx.throw(400, 'photo param err');
    }
    var rs = await post.create(pt);
    ctx.body = {
      code: 200,
      message: 'success',
      data: rs
    }
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
  },
  delete : async(ctx,nxt)=>{
    var pt = ctx.request.body;
    if(!pt._id){
      return ctx.throw(400, 'missing id')
    }
    var rs = await post.delete(pt);
    ctx.body = {
      code : 200, 
      message : 'success',
      data : rs
    }
  }

}
