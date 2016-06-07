'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _post2 = require('../services/post');

var _post3 = _interopRequireDefault(_post2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  get: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, nxt) {
      var query, rs;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = ctx.query;

              if (!query._id) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return _post3.default.get(query);

            case 4:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 7:
              _context.next = 9;
              return _post3.default.query(query);

            case 9:
              _context.t0 = _context.sent;

            case 10:
              rs = _context.t0;

              ctx.body = {
                code: 200,
                message: 'success',
                data: rs
              };

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));
    return function get(_x, _x2) {
      return ref.apply(this, arguments);
    };
  }(),
  post: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, nxt) {
      var pt, rs;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pt = ctx.request.body;

              pt.type = pt.type || 'markdown';

              if (!(pt.type == 'markdown' && !pt.title)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt('return', ctx.throw(400, 'markdown param err'));

            case 4:
              if (!(pt.type == 'photo' && !pt.content.length)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt('return', ctx.throw(400, 'photo param err'));

            case 6:
              _context2.next = 8;
              return _post3.default.create(pt);

            case 8:
              rs = _context2.sent;

              ctx.body = {
                code: 200,
                message: 'success',
                data: rs
              };

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));
    return function post(_x3, _x4) {
      return ref.apply(this, arguments);
    };
  }(),
  put: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, nxt) {
      var pt, fpt, tpt, rs;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              pt = ctx.request.body;

              if (pt._id) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return', ctx.throw(400, 'missing id'));

            case 3:
              fpt = { _id: pt._id };

              if (!(!pt.title && !pt.content)) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt('return', ctx.throw(400, 'no change body'));

            case 6:
              tpt = {};

              pt.title && (tpt.title = pt.title);
              pt.content && (tpt.content = pt.content);
              _context3.next = 11;
              return _post3.default.update(fpt, tpt);

            case 11:
              rs = _context3.sent;

              if (rs) {
                _context3.next = 14;
                break;
              }

              return _context3.abrupt('return', new Error('error in update post'));

            case 14:
              tpt._id = fpt._id;
              ctx.body = {
                code: 200,
                message: 'success',
                data: tpt
              };

            case 16:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));
    return function put(_x5, _x6) {
      return ref.apply(this, arguments);
    };
  }(),
  delete: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ctx, nxt) {
      var pt, rs;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              pt = ctx.request.body;

              if (pt._id) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt('return', ctx.throw(400, 'missing id'));

            case 3:
              _context4.next = 5;
              return _post3.default.delete(pt);

            case 5:
              rs = _context4.sent;

              ctx.body = {
                code: 200,
                message: 'success',
                data: rs
              };

            case 7:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));
    return function _delete(_x7, _x8) {
      return ref.apply(this, arguments);
    };
  }()

};