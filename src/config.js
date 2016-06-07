
var mongo;

if(process.env.NODE_ENV === 'production'){
  mongo = {
    host : process.env.DB_HOST || 'ds025459.mlab.com',
    port : process.env.DB_PORT || '25459', 
    name : process.env.DB_NAME || 'blog', 
    user : process.env.DB_USER || 'asuka999', 
    pass : process.env.DB_PASS || '1901104289s' ,
  }
  mongo.uri = 'mongodb://'+ mongo.user +':'+ mongo.pass +'@'+ mongo.host +':'+ mongo.port+'/' + mongo.name; 
}else if(process.env.NODE_ENV === 'coding'){
  mongo = JSON.parse(process.env.VCAP_SERVICES)
}else{
  mongo = {
    host : process.env.DB_HOST || 'ds025459.mlab.com',
    port : process.env.DB_PORT || '25459', 
    name : process.env.DB_NAME || 'blog', 
    user : process.env.DB_USER || 'asuka999', 
    pass : process.env.DB_PASS || '1901104289' ,
  }
  mongo.uri = 'mongodb://'+ mongo.user +':'+ mongo.pass +'@'+ mongo.host +':'+ mongo.port+'/' + mongo.name; 
  // mongo = {
  //   host: 'localhost',
  //   port: '27017',
  //   name: 'blog',
  //   uri : 'mongodb://localhost:27017/blog'
  // }
}


export default {
  user: {
    name: 'asuka',
    password: '123456',
  },
  db: {
    mongo : mongo
  },
  qiu: {
    ak: '54ETrd6XJwt3rmVI0JVnlnPjgBYFqFsGCoCMUH_B',
    sk: '1jk1U82Fk7TTLppCsJ6rFEjaFSRysB_4PKQMzGNS',
    domain: 'http://7xpjb6.com1.z0.glb.clouddn.com/',
    bucket: 'ibreak'
  },
  session: {
    keys: ['some secret hurr'],
  }
}
