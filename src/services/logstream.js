const fs = require('fs');
const rfs = require('rotating-file-stream');

const {
  REQUST_LOGGER_PATH,
  REQUST_LOGGER_INTERVAL,
  REQUST_LOGGER_SAVE_LOGS_ENABLE,
} = process.env;

// Defaults to streaming logs to stdout
let accessLogStream = null;

if (REQUST_LOGGER_SAVE_LOGS_ENABLE === true) {
  fs.existsSync(REQUST_LOGGER_PATH) || fs.mkdirSync(REQUST_LOGGER_PATH)

  accessLogStream = rfs('access.log', {
    interval: REQUST_LOGGER_INTERVAL,
    path: REQUST_LOGGER_PATH,
  });
}

module.exports = accessLogStream;
