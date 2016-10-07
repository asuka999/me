import Post from '../models/Post'
import mongo from 'mongodb'

export default {
  async get(query) {
    var arr = await Post.find({_id: new mongo.ObjectID(query._id)})
    return arr[0]
  },

  async query(query) {
    //  var query = { sort : .., limit}
    const opt = {
      sort: query.sort || {updateDate: 1},
      limit: query.limit || 20,
      skip: query.offset || 0
    }
    // const obj = query.type ? {type: query.type} : {}
    const obj = {type: query.type}
    return await Post.find(obj, opt)
  },

  async create(post) {
    post.date = post.updateDate = new Date
    return await Post.insert(post)
  },

  async delete(post) {
    return await Post.delete(post)
  },

  update : async (fpt, pt)=>{
    pt.updateDate = new Date;
    return await Post.update({_id : new mongo.ObjectID(fpt._id)}, {$set : pt});
  },

}