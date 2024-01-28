const _ = require('lodash');

module.exports = {
  sort: _.sortBy,
  deepCopy: _.cloneDeep,
  isJson: (str) => {
    try {
      return _.isPlainObject(JSON.parse(str));
    } catch (error) {
      return false;
    }
  },
};
