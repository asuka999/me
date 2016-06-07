'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Post = require('../models/Post');

var _Post2 = _interopRequireDefault(_Post);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  get: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(query) {
      var arr;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Post2.default.find({ _id: new _mongodb2.default.ObjectID(query._id) });

            case 2:
              arr = _context.sent;
              return _context.abrupt('return', arr[0]);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));
    return function get(_x) {
      return ref.apply(this, arguments);
    };
  }(),
  query: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_query) {
      var opt, obj;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //  var query = { sort : .., limit}

              opt = {
                sort: _query.sort || { updateDate: 1 },
                limit: _query.limit || 20
              };

              opt.skip = (_query.page || 0) * opt.limit;
              obj = _query.type ? { type: _query.type } : {};
              _context2.next = 5;
              return _Post2.default.find(obj, opt);

            case 5:
              return _context2.abrupt('return', _context2.sent);

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));
    return function query(_x2) {
      return ref.apply(this, arguments);
    };
  }(),
  create: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(pt) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              pt.date = pt.updateDate = new Date();
              // md.user = user;
              _context3.next = 3;
              return _Post2.default.insert(pt);

            case 3:
              return _context3.abrupt('return', _context3.sent);

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));
    return function create(_x3) {
      return ref.apply(this, arguments);
    };
  }(),
  update: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(fpt, pt) {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              pt.updateDate = new Date();
              _context4.next = 3;
              return _Post2.default.update({ _id: new _mongodb2.default.ObjectID(fpt._id) }, { $set: pt });

            case 3:
              return _context4.abrupt('return', _context4.sent);

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));
    return function update(_x4, _x5) {
      return ref.apply(this, arguments);
    };
  }(),
  delete: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(pt) {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _Post2.default.delete(pt);

            case 2:
              return _context5.abrupt('return', _context5.sent);

            case 3:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));
    return function _delete(_x6) {
      return ref.apply(this, arguments);
    };
  }()
};