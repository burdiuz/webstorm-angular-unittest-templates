/**
 * Created by Oleg Galaburda on 30.07.15.
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
    var httpService = null;

    var labelValue = 'LABEL';
    var textValue = 'TEXT';

    function TestHttpService($q) {
      var _this = this;
      _this.loadData = {};
      _this.load = sinon.spy(function() {
        return $q.when(_this.loadData);
      });
    }

    describe(CONTROLLER_NAME, function() {
      // Unit Tests for "TestController" Controller, "aw.test" module

      describe('When initialized', function() {
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
        var time = '1234567890123';
        beforeEach(function() {
          controller.readyHandler(time);
        });
        it('should save time', function() {
          expect(controller.readyTime).to.be.equal(time);
        });
      });
      describe('When child clicked(clickHandler called)', function() {
        var time = '0987654321098';
        beforeEach(function() {
          controller.clickHandler(time);
        });
        it('should save time', function() {
          expect(controller.clickTime).to.be.equal(time);
        });
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
    beforeEach(angular.mock.module(MODULE_NAME, function($provide) {
      $provide.service('testHttpService', TestHttpService);
    }));

    /**
     * Add basic services
     */
    beforeEach(inject(function(_$rootScope_, testHttpService) {
      $rootScope = _$rootScope_;
      httpService = testHttpService;
      httpService.loadData = {
        label: labelValue,
        text: textValue
      };
    }));
  });
})();