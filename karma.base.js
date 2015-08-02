/**
 * Created by Oleg Galaburda on 23.07.15.
 */

// Karma configuration
module.exports = {

  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: '',


  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: [],


  // list of files / patterns to load in the browser
  files: [
    {pattern: 'bower_components/jquery/dist/jquery.js', watched: false},
    {pattern: 'bower_components/bootstrap/dist/js/bootstrap.js', watched: false},
    {pattern: 'bower_components/angular/angular.js', watched: false},
    {pattern: 'bower_components/angular-mocks/angular-mocks.js', watched: false},
    'tests/1.3/src/*.module.js',
    'tests/1.3/src/*.js'
  ],


  // list of files to exclude
  exclude: [],


  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: {},


  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['progress'],


  // optionally, configure the reporter
  coverageReporter: {},

  // web server port
  port: 9876,


  // enable / disable colors in the output (reporters and logs)
  colors: true,


  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  logLevel: 0,


  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,


  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['PhantomJS'],
  //browsers: ['Chrome', 'IE', 'Firefox', 'PhantomJS', 'Safari'],


  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: false
};