'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conf = _config2.default.db.mongo;
var MongoClient = _mongodb2.default.MongoClient;

// Connection URL
var uri = conf.uri || 'mongodb://' + conf.host + ':' + conf.port + '/' + conf.name;

exports.default = {
  op: function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(fn) {
      var db;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return MongoClient.connect(uri);

            case 2:
              db = _context.sent;
              _context.next = 5;
              return fn(db);

            case 5:
              return _context.abrupt('return', _context.sent);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));
    return function op(_x) {
      return ref.apply(this, arguments);
    };
  }()
};