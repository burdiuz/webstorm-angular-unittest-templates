/**
 * Created by iFrame on 30.07.15.
 */
(function() {
  'use strict';

  var MODULE_NAME = 'aw.test';
  var CONTROLLER_NAME = 'TestController';

  describe(MODULE_NAME, function() {
    var $rootScope = null;
    /**
     * @type {TestController}
     */
    var controller = null;
    var $scope = null;

    describe(CONTROLLER_NAME, function() {
      // Unit Tests for "TestController" Controller, "aw.test" module

      it('Test', function() {

      });

      //End
      /**
       * Create environment and new controller instance
       */
      beforeEach(inject(function($controller) {
        $scope = $rootScope.$new(true);
        controller = $controller(CONTROLLER_NAME, {
          $scope: $scope
        });
      }));

      /**
       * Clear test, remove service instance
       */
      afterEach(function() {
        if ($scope) {
          $scope.$destroy();
          $scope = null;
        }
        $rootScope = null;
        controller = null;
      });
    });

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME));

    /**
     * Add basic services
     */
    beforeEach(inject(function(_$rootScope_) {
      $rootScope = _$rootScope_;
    }));
  });
})();