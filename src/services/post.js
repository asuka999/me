import Post from '../models/Post'
import mongo from 'mongodb'

;
export default {
  get : async (query)=>{
    var arr = await Post.find({_id:new mongo.ObjectID(query._id)});
    return arr[0];
  },
  query : async(query)=>{
     //  var query = { sort : .., limit}
     
    var opt = {
      sort : query.sort || {updateDate : 1},
      limit : query.limit || 20, 
    }
    opt.skip = (query.page||0)* opt.limit 
    var obj = query.type ? {type:query.type} : {};
    return await Post.find(obj,opt)
  },
  create : async (pt)=>{
    pt.date = pt.updateDate = new Date;
   // md.user = user;
    return await Post.insert(pt);
  },
  update : async (fpt, pt)=>{
    pt.updateDate = new Date;
    return await Post.update({_id : new mongo.ObjectID(fpt._id)}, {$set : pt});
  },
  delete : async (pt)=>{
    return await Post.delete(pt)
  }
}