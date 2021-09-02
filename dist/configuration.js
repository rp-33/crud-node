'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var configuration = {
  server: {
    port: process.env.PORT || 8888
  },
  db: {
    port: process.env.MONGODB_URI || 'mongodb://localhost/crudnode'
  }
};

exports.default = configuration;
//# sourceMappingURL=configuration.js.map