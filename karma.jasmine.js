var data = require('./karma.base');

module.exports = function(config) {
  data.frameworks = ['jasmine'];
  data.logLevel = config.LOG_INFO;
  data.files.push(
    'tests/1.3/jasmine/**/*.js'
  );
  config.set(data);
};