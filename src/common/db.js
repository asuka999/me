import  mongodb from 'mongodb'

import  assert from 'assert'
import  config from '../config'

var conf = config.db.mongo;
var MongoClient = mongodb.MongoClient;

// Connection URL
var url = 'mongodb://'+ conf.host +':' + conf.port + '/' + conf.name ;


export default {
  op : async(fn)=>{
    var db = await MongoClient.connect(url);
    return await fn(db);
  }
}
