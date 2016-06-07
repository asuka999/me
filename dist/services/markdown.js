'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Markdown = require('../models/Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: (function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(md, user) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              md.date = md.updateDate = new Date();
              md.user = user;
              _context.next = 4;
              return _Markdown2.default.insert(md);

            case 4:
              return _context.abrupt('return', _context.sent);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));
    return function create(_x, _x2) {
      return ref.apply(this, arguments);
    };
  })(),
  update: (function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(fmd, md) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              md.updateDate = new Date();
              _context2.next = 3;
              return _Markdown2.default.update(fmd, md);

            case 3:
              return _context2.abrupt('return', _context2.sent);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));
    return function update(_x3, _x4) {
      return ref.apply(this, arguments);
    };
  })(),
  delete: (function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(md) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _Markdown2.default.delete(md);

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));
    return function _delete(_x5) {
      return ref.apply(this, arguments);
    };
  })()
};
//# sourceMappingURL=markdown.js.map