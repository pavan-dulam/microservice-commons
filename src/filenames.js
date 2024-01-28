const { format } = require('date-fns');

const supportedFormats = {
  // Basic formats
  yyyy: 'year',
  MM: 'month',
  dd: 'day',
  HH: 'hour24',
  mm: 'minute',
  ss: 'second',
  // Extended formats
  'yyyy-MM-dd': 'date',
  'HH:mm:ss': 'time',
  'yyyy-MM-dd HH:mm:ss': 'dateTime',
  // Customizable separators
  'yyyy.MM.dd': 'dateSeparator',
  'HH-mm-ss': 'timeSeparator',
};

module.exports = {
  getFilenameWithDatetime: (
    prefix = '',
    dateFormat = 'yyyyMMdd-HHmmss',
    extension = '.txt'
  ) => {
    if (!supportedFormats[dateFormat]) {
      throw new Error(`Unsupported format: ${dateFormat}`);
    }

    const formattedDatetime = format(new Date(), dateFormat);
    return `${prefix}${formattedDatetime}${extension}`;
  },
  getSupportedFormats: () => supportedFormats,
};
