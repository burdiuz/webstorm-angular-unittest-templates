var data = require('./karma.base');

module.exports = function(config) {
  data.frameworks = ['mocha', 'sinon-chai'];
  data.logLevel = config.LOG_INFO;
  data.files.push(
    'tests/1.3/mocha/**/*.js'
  );
  config.set(data);
};