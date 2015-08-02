/**
 * Created by Oleg Galaburda on 30.07.15.
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
    var httpService = null;

    function TestHttpService($q) {
      var _this = this;
      _this.loadData = {};
      _this.load = sinon.spy(function() {
        return $q.when(_this.loadData);
      });
    }

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME, function($provide) {
      $provide.service('testHttpService', TestHttpService);
    }));

    describe(('aw.test::TestController' || 'TestController'), function() {

      // Unit Tests for "TestController" Controller, "aw.test" module

      describe('When initialized', function() {
        var labelValue = 'LABEL';
        var textValue = 'TEXT';
        beforeEach(function() {
          httpService.loadData = {
            label: labelValue,
            text: textValue
          };
          $rootScope.$digest();
        });
        beforeEach(createEnvironment);
        beforeEach(function() {
          $rootScope.$digest();
        });
        it('should call testHttpService.load', function() {
          expect(httpService.load).to.be.calledOnce;
        });
        it('should fill label/text fields', function() {
          expect(controller.label).to.be.equal(labelValue);
          expect(controller.text).to.be.equal(textValue);
        });
      });

      describe('When child ready(readyHandler called)', function() {
        beforeEach(createEnvironment);
        var time = '1234567890123';
        beforeEach(function() {
          controller.readyHandler(time);
        });
        it('should save time', function() {
          expect(controller.readyTime).to.be.equal(time);
        });
      });
      describe('When child clicked(clickHandler called)', function() {
        beforeEach(createEnvironment);
        var time = '0987654321098';
        beforeEach(function() {
          controller.clickHandler(time);
        });
        it('should save time', function() {
          expect(controller.clickTime).to.be.equal(time);
        });
      });

      //End

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
      'testHttpService',
      function(_$q_, _$rootScope_, _$controller_, _$timeout_, testHttpService) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $timeout = _$timeout_;
        httpService = testHttpService;
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