'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _middlewares = require('../middlewares');

var _CtrlUser = require('../controllers/CtrlUser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _expressPromiseRouter2.default)();

/* GET */

router.get('/user/get', _CtrlUser.getUsers);

/* POST */

router.post('/user/create', _middlewares.validate, _CtrlUser.createUser);

/* PUT */

router.put('/user/edit/:id', _CtrlUser.editUser);

/* DELETE */

router.delete('/user/delete', _CtrlUser.deleteUser);

exports.default = router;
//# sourceMappingURL=userRouter.js.map