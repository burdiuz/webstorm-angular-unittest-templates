var data = require('./karma.base');

module.exports = function(config) {
  data.frameworks = ['mocha'];
  data.logLevel = config.LOG_INFO;
  config.set(data);
};