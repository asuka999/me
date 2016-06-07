'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _qiniu = require('qiniu');

var _qiniu2 = _interopRequireDefault(_qiniu);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_qiniu2.default.conf.ACCESS_KEY = _config2.default.qiu.ak;
_qiniu2.default.conf.SECRET_KEY = _config2.default.qiu.sk;

var imgPolicy = new _qiniu2.default.rs.PutPolicy(_config2.default.qiu.bucket);
imgPolicy.callbackBody = '{"name":$(fname),"hash":$(etag),"url":"' + _config2.default.qiu.domain + '/$(etag)"}';
imgPolicy.returnBody = '{"name":$(fname),"hash":$(etag),"url":"' + _config2.default.qiu.domain + '/$(etag)"}';

var _index = _fs2.default.readFileSync(_path2.default.join(__dirname, '../../web-app/index.html'));

exports.default = {
  index: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ctx.body = _index.toString();

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));
    return function index(_x) {
      return ref.apply(this, arguments);
    };
  }(),
  token: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ctx.body = {
                code: 200,
                data: imgPolicy.token()
              };

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));
    return function token(_x2) {
      return ref.apply(this, arguments);
    };
  }()
};