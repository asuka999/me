'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _db2 = require('../common/db');

var _db3 = _interopRequireDefault(_db2);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// private
var db;
var col;
_db3.default.op(function (_db) {
  console.log('sadasda');
  db = _db;
  col = db.collection('user');
  col.updateOne({ name: _config2.default.user.name }, { $set: { name: _config2.default.user.name, password: _config2.default.user.password } }, { upsert: true }).then(function (data) {
    console.log('user insert');
  }).catch(function (err) {

    console.log(err);
  });
});

//export
exports.default = {
  find: function find(query, opt) {
    return new _promise2.default(function (resolve, reject) {
      var cursor = col.find(query);
      if (opt) {
        cursor.sort(opt.sort).skip(opt.skip).limit(opt.limit);
      }
      cursor.next(function (err, doc) {
        !err ? resolve(doc) : reject(err);
      });
    });
  },
  update: function update(fmd, md, opt) {
    return col.findOneAndUpdate(fmd, md, opt).then(function (rs) {
      if (rs.ok != 1) {
        throw new Error({ msg: 'no err but update fail', detail: rs });
      }
      return rs.value;
    });
  }
};

//
//title, date, updateDate, content