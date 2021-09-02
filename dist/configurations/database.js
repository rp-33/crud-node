'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(config.db.port, { useCreateIndex: true, useNewUrlParser: true }).then(function (db) {
  return console.log(config.db.port + ' is conected ');
}).catch(function (err) {
  return console.log(err);
});

exports.default = _mongoose2.default;
//# sourceMappingURL=database.js.map