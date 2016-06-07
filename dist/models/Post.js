'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _db2 = require('../common/db');

var _db3 = _interopRequireDefault(_db2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// private
var db;
var col;
_db3.default.op(function (_db) {
  db = _db;
  col = db.collection('post');
});

//export
exports.default = {
  find: function find(query, opt) {
    return new _promise2.default(function (resolve, reject) {
      var cursor = col.find(query);
      if (opt) {
        cursor.sort(opt.sort).skip(opt.skip).limit(opt.limit);
      }
      cursor.toArray(function (err, docs) {
        !err ? resolve(docs) : reject(err);
      });
    });
  },
  insert: function insert(pt) {
    return col.insertOne(pt).then(function (rs) {
      if (rs.insertedCount != 1 || rs.result.ok != 1 || rs.result.n != 1) {
        throw new Error({ msg: 'no err but insert false', detail: rs });
      }
      return rs.ops[0];
    });
  },
  update: function update(fmd, md) {
    return col.findOneAndUpdate(fmd, md).then(function (rs) {
      if (rs.ok != 1) {
        throw new Error({ msg: 'no err but update fail', detail: rs });
      }
      return rs.value;
    });
  },
  delete: function _delete(md) {
    return col.deleteOne(md).then(function (rs) {
      if (rs.deletedCount != 1 || rs.result.ok != 1 || rs.result.n != 1) {
        throw new Error({ msg: 'no err but delete false', detail: rs });
      }
      return true;
    });
  }
};

//
//title, date, updateDate, content