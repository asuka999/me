

var mongo = process.env.NODE_ENV === 'production' ? JSON.parse(process.env.VCAP_SERVICES) :  {
  host: 'localhost',
  port: '27017',
  name: 'blog',
  uri : 'mongodb://localhost:27017/blog'
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
