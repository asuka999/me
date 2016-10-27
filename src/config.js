const mongo = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS
}

mongo.uri = `mongodb://${mongo.user}:${mongo.pass}@${mongo.host}:${mongo.port}/${mongo.name}`

export default {
  db: {
    mongo
  },
  qiu: {
    ak: '54ETrd6XJwt3rmVI0JVnlnPjgBYFqFsGCoCMUH_B',
    sk: '1jk1U82Fk7TTLppCsJ6rFEjaFSRysB_4PKQMzGNS',
    domain: 'http://7xpjb6.com1.z0.glb.clouddn.com/',
    bucket: 'ibreak'
  },
  session: {
    keys: ['some secret hurr']
  }
}
