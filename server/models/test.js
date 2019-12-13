'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
/**
 * Test Schema
 */
var TestSchema = new Schema({
  name: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mongoose.model('test', TestSchema);
