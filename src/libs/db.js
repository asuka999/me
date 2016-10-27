import mongodb from 'mongodb'
import config from '../config'

const conf = config.db.mongo
const MongoClient = mongodb.MongoClient

// Connection URL
const uri = conf.uri || `mongodb://${conf.host}:${conf.port}/${conf.name}`

console.log('uri', uri)
function db() {
  let cache
  return async function(collection) {
    cache = cache || await MongoClient.connect(uri)
    return cache.collection(collection)
  }
}

export default db()
