var data = require('./karma.base');

module.exports = function(config) {
  data.frameworks = ['jasmine'];
  data.logLevel = config.LOG_INFO;
  config.set(data);
};