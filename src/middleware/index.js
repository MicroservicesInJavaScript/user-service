const morgan = require('morgan');

const stream = require('../services/logstream');

module.exports = [
  morgan('combined', { stream: stream }),
];
