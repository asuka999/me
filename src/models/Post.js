import dbPromise from '../common/db'
import {cleanObj} from '../common/util'
// private

let col
dbPromise.then(db => { col = db.collection('post') })

// export
export default {
  find: (query, opt) => {
    return new Promise((resolve, reject) => {
      const cursor = col.find(cleanObj(query))
      if (opt) {
        cursor.sort(opt.sort).skip(opt.skip).limit(opt.limit)
      }
      cursor.toArray(function(err, docs) {
        !err ? resolve(docs) : reject(err)
      })
    })
  },

  insert: (pt) => {
    return col.insertOne(pt)
    .then((rs) => {
      if (rs.insertedCount !== 1 || rs.result.ok !== 1 || rs.result.n !== 1) {
        const err = new Error('no err but insert false')
        err.detail = rs
        throw err
      }
      return rs.ops[0]
    })
  },

  update: (fmd, md) => {
    return col.findOneAndUpdate(fmd, md)
    .then((rs) => {
      if (rs.ok !== 1) {
        const err = new Error('no err but update fail')
        err.detail = rs
        throw err
      }
      return rs.value
    })
  },

  delete: (md) => {
    return col.deleteOne(md)
    .then((rs) => {
      if (rs.deletedCount != 1 || rs.result.ok != 1 || rs.result.n != 1) {
        throw new Error({ msg: 'no err but delete false', detail: rs })
      }
      return true
    })
  }
}

// 
//title, date, updateDate, content 
