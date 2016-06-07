import path from 'path'
import fs from 'fs'

import qiu from 'qiniu';
import config from '../config' 

qiu.conf.ACCESS_KEY = config.qiu.ak;
qiu.conf.SECRET_KEY = config.qiu.sk;

var imgPolicy = new qiu.rs.PutPolicy(config.qiu.bucket);
imgPolicy.callbackBody = '{"name":$(fname),"hash":$(etag),"url":"' + config.qiu.domain + '/$(etag)"}';
imgPolicy.returnBody = '{"name":$(fname),"hash":$(etag),"url":"' + config.qiu.domain + '/$(etag)"}';


var index = fs.readFileSync(path.join(__dirname, '../../web-app/index.html'));

export default {
  index:async (ctx)=>{
    ctx.body = index.toString();
  },
  token :async (ctx)=>{
    ctx.body = {
      code : 200,
      data : imgPolicy.token()
    }
  }
}

