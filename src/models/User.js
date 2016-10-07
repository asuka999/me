import dbPromise from '../common/db'

// private
let col
dbPromise.then(db => { col = db.collection('user') })

// export
export default {
  find: (query, opt) => {
    opt.fields = opt.fields || {
      password: 0,
      words: 0
    }
    return col.findOne(query, opt)
  },
  update: (fmd, md, opt) => {
    return col.findOneAndUpdate(fmd, md, opt)
    .then((rs) => {
      if (rs.ok !== 1) {
        const err = new Error('no err but update fail')
        err.detail = rs
        throw err
      }
      return rs.value
    })
  }
}

// title, date, updateDate, content
