'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _userRouter = require('./userRouter');

var _userRouter2 = _interopRequireDefault(_userRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = function router(app) {
	app.use('/api/v1', _userRouter2.default);
};

exports.default = router;
//# sourceMappingURL=index.js.map