const { getLogger, configure } = require("log4js"),
  { logFileLoc, logLevel } = require('./config.json');

configure({
  appenders: {
    file: { type: "file", filename: logFileLoc }
  },
  categories: {
    default: { appenders: ["file"], level: logLevel }
  }
});
module.exports = getLogger();