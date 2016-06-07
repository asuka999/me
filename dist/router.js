'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _controllers = require('./controllers/');

var _controllers2 = _interopRequireDefault(_controllers);

var _post = require('./controllers/post');

var _post2 = _interopRequireDefault(_post);

var _user = require('./controllers/user');

var _user2 = _interopRequireDefault(_user);

var _filter = require('./filters/filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _koaRouter2.default)();

router.get('/', _controllers2.default.index).get('/token', _controllers2.default.token).post('/login', _user2.default.login).get('/logout', _user2.default.logout).get('/theme', _user2.default.theme).put('/user/profile', _filter2.default.login, _user2.default.profile).post('/user/img', _filter2.default.login, _user2.default.insertImg).delete('/user/img', _filter2.default.login, _user2.default.deleteImg).get('/post', _post2.default.get).post('/post', _filter2.default.login, _post2.default.post).put('/post', _filter2.default.login, _post2.default.put).delete('/post', _filter2.default.login, _post2.default.delete);

exports.default = router;

// --harmony_object_observe --harmony_modules --harmony_function_sent --harmony_sharedarraybuffer --harmony_simd --harmony_do_expressions --harmony_iterator_close --harmony_tailcalls --harmony_object_values_entries --harmony_object_own_property_descriptors --harmony_regexp_property --harmony