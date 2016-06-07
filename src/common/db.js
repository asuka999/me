import  mongodb from 'mongodb'

import  assert from 'assert'
import  config from '../config'

var conf = config.db.mongo;
var MongoClient = mongodb.MongoClient;

// Connection URL
var uri = conf.uri || 'mongodb://'+ conf.host +':' + conf.port + '/' + conf.name ;


export default {
  op : async(fn)=>{
    var db = await MongoClient.connect(uri);
    return await fn(db);
  }
}
