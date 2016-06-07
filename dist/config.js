'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mongo;

if (process.env.NODE_ENV === 'production') {
  mongo = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
  };
  mongo.uri = 'mongodb://' + mongo.user + ':' + mongo.pass + '@' + mongo.host + ':' + mongo.port + '/' + mongo.name;
} else if (process.env.NODE_ENV === 'coding') {
  mongo = JSON.parse(process.env.VCAP_SERVICES);
} else {
  mongo = {
    host: 'localhost',
    port: '27017',
    name: 'blog',
    uri: 'mongodb://localhost:27017/blog'
  };
}

exports.default = {
  user: {
    name: 'asuka',
    password: '123456'
  },
  db: {
    mongo: mongo
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
};
//# sourceMappingURL=config.js.map