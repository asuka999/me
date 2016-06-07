'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaSession = require('koa-session');

var _koaSession2 = _interopRequireDefault(_koaSession);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

// static
//var publicFiles = kstatic(path.join(__dirname, 'services'));
//publicFiles._name = 'static /dist';
//app.use(convert(publicFiles));
//app.use('/public', convert(serve(path.join(__dirname, '..', 'vue_blog', 'dist'))));
app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_path2.default.join(__dirname, '../dist/public'))));
console.log(_path2.default.join(__dirname, '../dist/public'));
// session
app.keys = _config2.default.session.keys;
app.use((0, _koaConvert2.default)((0, _koaSession2.default)(app)));

// logger
app.use((0, _koaConvert2.default)((0, _koaLogger2.default)()));

// err catch
app.use(function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return next();

                    case 3:
                        _context.next = 10;
                        break;

                    case 5:
                        _context.prev = 5;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);
                        ctx.body = { message: _context.t0.message };
                        ctx.status = _context.t0.status || 500;

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 5]]);
    }));
    return function (_x, _x2) {
        return ref.apply(this, arguments);
    };
}());

//before handle
app.use((0, _koaBodyparser2.default)({
    onerror: function onerror(err, ctx) {
        ctx.throw('body parse error', 422);
    }
}));
// router
app.use(_router2.default.routes()).use(_router2.default.allowedMethods()); //what ?????

var port = process.env.VCAP_APP_PORT || process.env.PORT || 3000;
app.listen(port);
console.log('listen on port');