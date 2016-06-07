'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  login: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, nxt) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(ctx.path === '/favicon.ico')) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return');

            case 2:
              if (ctx.session.user) {
                _context.next = 6;
                break;
              }

              // ctx.body = {code : 401, msg : 'unauthorized'}
              ctx.throw(401);
              _context.next = 8;
              break;

            case 6:
              _context.next = 8;
              return nxt();

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function login(_x, _x2) {
      return ref.apply(this, arguments);
    }

    return login;
  }()
};