import mongo from 'mongodb'
import collection from '../libs/db'
import {cleanObj} from '../libs/util'

const COLLECTION_NAME = 'post'

export default {
  async find(query, opt) {
    const col = await collection(COLLECTION_NAME)
    if (query._id) {
      query._id = new mongo.ObjectID(query._id)
    }
    const cursor = col.find(query ? cleanObj(query) : {})
    if (opt) {
      cursor.sort(opt.sort).skip(opt.skip).limit(opt.limit)
    }
    const rs = await cursor.toArray()
    return rs
  },

  async insert (body) {
    const col = await collection(COLLECTION_NAME)
    const rs = await col.insertOne(body)
    if (rs.insertedCount !== 1 || rs.result.ok !== 1 || rs.result.n !== 1) {
      const err = new Error('no err but insert false')
      err.detail = rs
      throw err
    }
    return rs.ops[0]
  },

  async delete(query) {
    const col = await collection(COLLECTION_NAME)
    if (query._id) {
      query._id = new mongo.ObjectID(query._id)
    }
    const rs = await col.deleteOne(query)
    if (rs.deletedCount !== 1 || rs.result.ok !== 1 || rs.result.n !== 1) {
      const err = new Error('no err but delete post false')
      err.detail = rs
      throw err
    }
    return true
  },

  async update(query, body) {
    const col = await collection(COLLECTION_NAME)
    if (query._id) {
      query._id = new mongo.ObjectID(query._id)
    }
    const rs = await col.findOneAndUpdate(query, body)
    if (rs.ok !== 1) {
      const err = new Error('no err but update fail')
      err.detail = rs
      throw err
    }
    return rs.value
  }
}

// title, date, updateDate, content, type, mode
