'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _ip = require('ip');

var _ip2 = _interopRequireDefault(_ip);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _database = require('./configurations/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http2.default.createServer(_app2.default).listen('8888', function () {
	console.log('listener ' + _ip2.default.address() + ':' + _app2.default.get('port'));
});
//# sourceMappingURL=index.js.map