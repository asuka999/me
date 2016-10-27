import Post from '../models/Post'

export default {
  async get(query) {
    var arr = await Post.find(query)
    return arr && arr[0]
  },

  async query(query = {}, opt = {}) {
    opt = {
      sort: opt.sort || {updateDate: -1},
      limit: opt.limit || 20,
      skip: opt.offset || 0
    }
    query.lock = query.lock || false
    return await Post.find(query, opt)
  },

  async create(post) {
    post.date = post.updateDate = new Date
    return await Post.insert(post)
  },

  async delete(post) {
    return await Post.delete(post)
  },

  async update(query, $set) {
    $set.updateDate = new Date
    return await Post.update(query, {$set})
  }
}
