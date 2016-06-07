'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _user = require('../services/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  theme: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, nxt) {
      var rs;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _user2.default.find({ name: _config2.default.user.name });

            case 2:
              rs = _context.sent;

              if (rs) {
                _context.next = 5;
                break;
              }

              throw new Error('query err in get theme');

            case 5:
              if (ctx.session.user) rs.isLogin = true;
              delete rs.password;
              ctx.body = {
                code: 200,
                data: rs
              };

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));
    return function theme(_x, _x2) {
      return ref.apply(this, arguments);
    };
  }(),
  login: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, nxt) {
      var u, rs;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              u = ctx.request.body;

              if (ctx.session.user) {
                _context2.next = 6;
                break;
              }

              _context2.next = 4;
              return _user2.default.find({ name: u.name });

            case 4:
              rs = _context2.sent;

              if (rs && u.password == rs.password) {
                delete rs.password;
                rs.isLogin = true;
                ctx.session.user = u;
                ctx.body = {
                  code: 200,
                  data: rs
                };
              } else {
                ctx.throw(400, 'login fail');
              }

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));
    return function login(_x3, _x4) {
      return ref.apply(this, arguments);
    };
  }(),
  logout: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, nxt) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ctx.session.user = null;
              ctx.body = {
                code: 200,
                msg: 'logout success'
              };

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));
    return function logout(_x5, _x6) {
      return ref.apply(this, arguments);
    };
  }(),
  profile: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ctx, nxt) {
      var p, tmp, rs;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              p = ctx.request.body;

              if (!(!p.profile1 && !p.profile2)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt('return', ctx.throw(400, 'profile require'));

            case 3:
              tmp = {};

              p.profile1 && (tmp.profile1 = p.profile1);
              p.profile2 && (tmp.profile2 = p.profile2);

              _context4.next = 8;
              return _user2.default.update(tmp);

            case 8:
              rs = _context4.sent;


              ctx.body = {
                code: 200,
                data: tmp
              };

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));
    return function profile(_x7, _x8) {
      return ref.apply(this, arguments);
    };
  }(),
  insertImg: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(ctx, nxt) {
      var b, rs;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              b = ctx.request.body;

              if (!(!b || !b.img)) {
                _context5.next = 3;
                break;
              }

              return _context5.abrupt('return', ctx.throw(400, 'img require'));

            case 3:
              _context5.next = 5;
              return _user2.default.insertImg(b.img);

            case 5:
              rs = _context5.sent;

              ctx.body = {
                code: 200,
                data: rs
              };

            case 7:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));
    return function insertImg(_x9, _x10) {
      return ref.apply(this, arguments);
    };
  }(),
  deleteImg: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(ctx, nxt) {
      var b, rs;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              b = ctx.request.body;

              if (!(!b || !b.img)) {
                _context6.next = 3;
                break;
              }

              return _context6.abrupt('return', ctx.throw(400, 'img require'));

            case 3:
              _context6.next = 5;
              return _user2.default.deleteImg(b.img);

            case 5:
              rs = _context6.sent;

              ctx.body = {
                code: 200,
                data: rs
              };

            case 7:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));
    return function deleteImg(_x11, _x12) {
      return ref.apply(this, arguments);
    };
  }()

};