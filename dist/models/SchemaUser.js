'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var userSchema = new _mongoose.Schema({
  createAt: {
    type: Date,
    default: new Date()
  },
  name: {
    type: String,
    lowercase: true,
    required: [true, 'Name is required.']
  },
  lastName: {
    type: String,
    lowercase: true,
    required: [true, 'Last name is required.']
  },
  ci: {
    type: Number,
    unique: [true, 'identity card is duplicated'],
    required: [true, 'identity card is required.']
  },
  mail: {
    type: String,
    lowercase: true,
    unique: [true, 'Mail is duplicated'],
    required: [true, 'Mail is required.'],
    match: [/.+\@.+\..+/, 'Please enter a valid email']
  },
  phone: {
    type: Number,
    required: [true, 'Phone is required.']
  }
});

exports.default = (0, _mongoose.model)('User', userSchema);
//# sourceMappingURL=SchemaUser.js.map