import dbHelper from '../common/db'
import config from '../config'
// private 
var db;
var col;
dbHelper.op((_db) => {
  console.log('sadasda')
  db = _db;
  col = db.collection('user');
  col.updateOne({name: config.user.name}, { $set: {name:config.user.name, password:config.user.password}}, { upsert:true})
  .then((data)=>{
    console.log('user insert');
  })
  .catch((err)=>{

    console.log(err);
  })
});

//export 
export default {
  find : (query,opt)=>{
    return new Promise((resolve,reject)=>{
      var cursor = col.find(query);
      if(opt){
        cursor.sort(opt.sort).skip(opt.skip).limit(opt.limit)
      }
      cursor.next(function(err, doc) {
        !err ? 
        resolve(doc) :
        reject(err)
      });
    })
  },
  update: (fmd, md, opt) => {
    return col.findOneAndUpdate(fmd, md, opt)
    .then((rs) => {
      if (rs.ok != 1) {
        throw new Error({msg : 'no err but update fail', detail : rs})
      }
      return rs.value;
    })
  },
}

// 
//title, date, updateDate, content 
