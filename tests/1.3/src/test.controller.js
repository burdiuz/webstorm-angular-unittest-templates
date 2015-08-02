/**
 * Created by Oleg Galaburda on 23.07.15.
 */
(function() {
  'use strict';

  function TestController(testHttpService) {
    var _this = this;
    _this.label = '';
    _this.text = '';
    _this.readyTime = '';
    _this.clickTime = '';
    _this.readyHandler = function(time){
      _this.readyTime = time;
    };
    _this.clickHandler = function(time){
      _this.clickTime = time;
    };
    testHttpService.load().then(function(data){
      _this.label = data.label;
      _this.text = data.text;
    });

  }

  angular.module('aw.test').controller('TestController', TestController);
})();