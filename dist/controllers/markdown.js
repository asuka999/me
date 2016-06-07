'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _markdown = require('../services/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    get: function get(ctx, nxt) {},
    post: (function () {
        var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, nxt) {
            var md, rs;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            md = ctx.request.body;

                            if (!(!md.title || !md.content)) {
                                _context.next = 3;
                                break;
                            }

                            return _context.abrupt('return', ctx.throw(400, 'missing title or content'));

                        case 3:
                            _context.next = 5;
                            return _markdown2.default.create(md, ctx.session.user);

                        case 5:
                            rs = _context.sent;

                            ctx.body = {
                                code: 200,
                                message: 'success',
                                data: rs
                            };

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));
        return function post(_x, _x2) {
            return ref.apply(this, arguments);
        };
    })(),
    put: (function () {
        var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, nxt) {
            var md, rs;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            md = ctx.request.body;

                            if (md._id) {
                                _context2.next = 3;
                                break;
                            }

                            return _context2.abrupt('return', ctx.throw(400, 'missing id'));

                        case 3:
                            delete md._id;

                            if (!(!md.title || md.content)) {
                                _context2.next = 6;
                                break;
                            }

                            return _context2.abrupt('return', ctx.throw(400, 'no change body'));

                        case 6:
                            _context2.next = 8;
                            return _markdown2.default.update({ _id: md }, md);

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
        return function put(_x3, _x4) {
            return ref.apply(this, arguments);
        };
    })(),
    delete: (function () {
        var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, nxt) {
            var md, rs;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            md = ctx.request.body;

                            if (md._id) {
                                _context3.next = 3;
                                break;
                            }

                            return _context3.abrupt('return', ctx.throw(400, 'missing id'));

                        case 3:
                            _context3.next = 5;
                            return _markdown2.default.delete(md);

                        case 5:
                            rs = _context3.sent;

                            ctx.body = {
                                code: 200,
                                message: 'success',
                                data: rs
                            };

                        case 7:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));
        return function _delete(_x5, _x6) {
            return ref.apply(this, arguments);
        };
    })()

};
//# sourceMappingURL=markdown.js.map