import collection from '../libs/db'

const COLLECTION_NAME = 'user'
// export
export default {
  async find (query, opt) {
    opt.fields = opt.fields || {
      password: 0,
      words: 0
    }
    const col = await collection(COLLECTION_NAME)
    return col.findOne(query, opt)
  }
  // update: async (fmd, md, opt) => {
  //   return col.findOneAndUpdate(fmd, md, opt)
  //   .then((rs) => {
  //     if (rs.ok !== 1) {
  //       const err = new Error('no err but update fail')
  //       err.detail = rs
  //       throw err
  //     }
  //     return rs.value
  //   })
  // }
}

// title, date, updateDate, content
