/**
 * Created by Oleg Galaburda on 23.07.15.
 */
(function() {
  'use strict';

  function TestDirectiveController($timeout, testTimeService) {
    var _this = this;
    var _text = '';
    _this.buttonEnabled = false;
    _this.ready = false;

    Object.defineProperties(_this, {
      text: {
        get: function(){
          return _text;
        },
        set: function(value){
          _text = value || '';
          _this.validateForm();
        }
      }
    });
    _this.validateForm = function(){
       _this.buttonEnabled = Boolean(_text && _this.ready);
    };
    _this.click = function(){
      _this.onClick({
        time: testTimeService.getTime()
      });
    }

    $timeout(function(){
      _this.ready = true;
      _this.onReady({
        time: testTimeService.getTime()
      });
      _this.validateForm();
    }, 100);
  }

  function testDirectiveConfig(){
    return {
      restrict: 'AE',
      templateUrl: 'tests/1.3/test.directive.html',
      controller: TestDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        text: '@text',
        onReady: '&?onReady',
        onClick: '&?onClick'
      }
    };
  }

  angular.module('aw.test').directive('test', testDirectiveConfig);
})();