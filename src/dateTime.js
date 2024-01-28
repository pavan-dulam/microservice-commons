const { format, parseISO } = require('date-fns');

module.exports = {
  getCurrentDateTime: (DateTimeFormat = 'yyyy-MM-dd HH:mm:ss') => {
    if (!this._currentDateTime) {
      this._currentDateTime = format(new Date(), DateTimeFormat);
    }
    return this._currentDateTime;
  },
  parseIsoDate: (isoString) => parseISO(isoString),
};
