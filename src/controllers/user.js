'use strict'

import config from '../config'
import user from '../services/user'

export default {
  theme : async(ctx, nxt)=>{
    console.log('user', user);
    var rs = await user.find({name:config.user.name});
    if(!rs) throw new Error('query err in get theme');
    if(ctx.session.user) rs.isLogin = true;
    delete rs.password;
    ctx.body = {
      code : 200, 
      data : rs,
    }
  },
  login : async(ctx, nxt)=>{
    var u = ctx.request.body;
    if(!ctx.session.user) {
      var rs = await user.find({name:u.name});
      if(rs && u.password==rs.password){
          delete rs.password;
          rs.isLogin = true; 
          ctx.session.user = u;
          ctx.body = {
            code : 200, 
            data : rs,
          }
      }else{
          ctx.throw(400, 'login fail');
      }
    }
    
  },
  logout : async (ctx, nxt)=>{
    ctx.session.user = null
    ctx.body = {
      code : 200,
      msg : 'logout success'
    }
  },
  profile : async(ctx, nxt)=>{
    var p = ctx.request.body;
    if(!p.profile1 && !p.profile2){
      return ctx.throw(400, 'profile require');
    }
    
    var tmp = {};
    p.profile1 && (tmp.profile1 = p.profile1);
    p.profile2 && (tmp.profile2 = p.profile2);

    var rs = await user.update(tmp);

    ctx.body =  {
       code :200,
       data : tmp,
    }
  },
  insertImg : async (ctx,nxt)=>{
    var b = ctx.request.body;
    if(!b || !b.img){
      return ctx.throw(400, 'img require');
    }
    
    var rs = await user.insertImg(b.img)
    ctx.body =  {
       code :200,
       data : rs,
    }
  },
  deleteImg :async(ctx, nxt) =>{
      var b = ctx.request.body;
    if(!b || !b.img){
      return ctx.throw(400, 'img require');
    }
    var rs = await user.deleteImg(b.img)
    ctx.body =  {
       code :200,
       data : rs,
    }
  }

}