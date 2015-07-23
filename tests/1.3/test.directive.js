/**
 * Created by Oleg Galaburda on 23.07.15.
 */
(function() {
  'use strict';

  function TestDirectiveController() {

  }

  angular.module('aw.test').directive('awTest', function(){
    return {
      restrict: 'AE',
      templateUrl: 'tests/1.3/test.directive.html',
      controller: TestDirectiveController,
      controllerAs: 'test',
      bindToController: true,
      scope: {
        text: '@awText',
        onReady: '&?awOnReady'
      }
    };
  });
})();