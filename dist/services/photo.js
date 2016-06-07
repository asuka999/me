'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Photo = require('../models/Photo');

var _Photo2 = _interopRequireDefault(_Photo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: (function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(pt) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pt.date = pt.updateDate = new Date();
              _context.next = 3;
              return _Photo2.default.insert(pt);

            case 3:
              return _context.abrupt('return', _context.sent);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));
    return function create(_x) {
      return ref.apply(this, arguments);
    };
  })(),
  update: (function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(fpt, pt) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pt.updateDate = new Date();
              _context2.next = 3;
              return _Photo2.default.update(fpt, mpt);

            case 3:
              return _context2.abrupt('return', _context2.sent);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));
    return function update(_x2, _x3) {
      return ref.apply(this, arguments);
    };
  })(),
  delete: (function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(pt) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _Photo2.default.delete(pt);

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));
    return function _delete(_x4) {
      return ref.apply(this, arguments);
    };
  })()
};
//# sourceMappingURL=photo.js.map