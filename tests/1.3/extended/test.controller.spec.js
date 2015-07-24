/**
 * Created by Oleg Galaburda on 24.07.15.
 */
(function() {
  'use strict';

  var MODULE_NAME = 'aw.test';

  describe(('Controllers' || MODULE_NAME), function() {
    var $q = null;
    var $controller = null;
    var $timeout = null;
    var $rootScope = null;
    /**
     * @type {TestController}
     */
    var controller = null;
    var $scope = null;


    function MockedService() {

    }

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME, function($provide) {
      $provide.service('MockedService', MockedService);
    }));

    describe(('aw.test::TestController' || 'TestController'), function() {

      it('#self-test', function() {
        expect($scope).to.be.ok;
        expect(controller).to.be.ok;
      });

      // Unit Tests for "TestController" Controller, "aw.test" module

      it('Test', function() {

      });

      //End

      beforeEach(createEnvironment);
      afterEach(destroyEnvironment);
    });

    /**
     * Add basic services
     */
    beforeEach(inject([
      '$q',
      '$rootScope',
      '$controller',
      '$timeout',
      function(_$q_, _$rootScope_, _$controller_, _$timeout_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $timeout = _$timeout_;
      }
    ]));

    /**
     * Create environment and new controller instance
     */
    function createEnvironment() {
      $scope = $rootScope.$new(true);
      controller = createControllerInstance();
    }

    /**
     * Return new controller instance
     */
    function createControllerInstance() {
      var controller = $controller('TestController', {
        $scope: $scope
      });
      return controller;
    }

    /**
     * Clear test, remove service instance
     */
    function destroyEnvironment() {
      if ($scope) {
        $scope.$destroy();
        $scope = null;
      }
      $rootScope = null;
      controller = null;
    }
  });

})();