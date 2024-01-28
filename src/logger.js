const log4js = require('log4js');

const isDev = process.env.NODE_ENV === 'development';

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'file', filename: 'app.log' },
  },
  categories: {
    default: { appenders: ['out'], level: isDev ? 'debug' : 'info' },
    app: { appenders: ['app'], level: isDev ? 'trace' : 'debug' }, // Enable trace in dev
  },
});

module.exports = log4js.getLogger(); // Export the default logger
