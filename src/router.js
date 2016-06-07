import koaRouter from 'koa-router'

import index from './controllers/'
import post from './controllers/post'
import user from './controllers/user'
import filter from './filters/filter'

var router = koaRouter();

router
    .get('/', index.index)
    .get('/token', index.token)

    .post('/login', user.login)
    .get('/logout', user.logout)

    .get('/theme', user.theme)
    .put('/user/profile', filter.login, user.profile)
    .post('/user/img', filter.login, user.insertImg)
    .delete('/user/img', filter.login, user.deleteImg)

    .get('/post',  post.get)
    .post('/post', filter.login, post.post) 
    .put('/post', filter.login, post.put)
    .delete('/post', filter.login, post.delete)
    

    
export default router;

// --harmony_object_observe --harmony_modules --harmony_function_sent --harmony_sharedarraybuffer --harmony_simd --harmony_do_expressions --harmony_iterator_close --harmony_tailcalls --harmony_object_values_entries --harmony_object_own_property_descriptors --harmony_regexp_property --harmony
