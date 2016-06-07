'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  find: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(user) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _User2.default.find(user);

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));
    return function find(_x) {
      return ref.apply(this, arguments);
    };
  }(),
  insertImg: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(img) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _User2.default.update({ name: _config2.default.user.name }, { $addToSet: { imgs: img } }, { upsert: true });

            case 2:
              return _context2.abrupt('return', _context2.sent);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));
    return function insertImg(_x2) {
      return ref.apply(this, arguments);
    };
  }(),
  deleteImg: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(img) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _User2.default.update({ name: _config2.default.user.name }, { $pull: { imgs: { $in: [img] } } });

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));
    return function deleteImg(_x3) {
      return ref.apply(this, arguments);
    };
  }(),
  update: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(p) {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _User2.default.update({ name: _config2.default.user.name }, { $set: p });

            case 2:
              return _context4.abrupt('return', _context4.sent);

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));
    return function update(_x4) {
      return ref.apply(this, arguments);
    };
  }()
};