'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = koaRouter();
var index = _fs2.default.readFileSync(_path2.default.join(__dirname, '../../vue-blog/index.html'));

qiu.conf.ACCESS_KEY = _config2.default.qiu.ak;
qiu.conf.SECRET_KEY = _config2.default.qiu.sk;
//# sourceMappingURL=common.js.map