import qiu from 'qiniu'
import config from '../config'
import user from '../services/user'
import post from '../services/post'
import {POST_TYPES} from '../../constants'

qiu.conf.ACCESS_KEY = config.qiu.ak
qiu.conf.SECRET_KEY = config.qiu.sk

var imgPolicy = new qiu.rs.PutPolicy(config.qiu.bucket)
imgPolicy.callbackBody = '{"name":$(fname),"hash":$(etag),"url":"' + config.qiu.domain + '/$(etag)"}'
imgPolicy.returnBody = '{"name":$(fname),"hash":$(etag),"url":"' + config.qiu.domain + '/$(etag)"}'

export default {
  index: async ctx => {
    ctx.body = [{
      img: 'http://7xpjb6.com1.z0.glb.clouddn.com/FullSizeRender%201.jpg',
      title: 'sjahdjhsajdmbnm'
    }, {
      img: 'http://7xpjb6.com1.z0.glb.clouddn.com/FullSizeRender%201.jpg',
      title: 'sjahdjhsajdmbnm'
    }, {
      img: 'http://7xpjb6.com1.z0.glb.clouddn.com/FullSizeRender%201.jpg',
      title: 'sjahdjhsajdmbnm'
    }]
  },
  token: async ctx => {
    ctx.body = {token: imgPolicy.token()}
  },
  theme: async ctx => {
    // todo always not query password
    const rs = await user.find({name: config.user.name})
    delete rs.password
    const posts = await post.query({type: POST_TYPES.photo, limit: 3})
    for (let i = 0; i < posts.length; i++) {

    }
    ctx.body = {
      headline: rs.headline,
      posts: posts
    }
  }
}
