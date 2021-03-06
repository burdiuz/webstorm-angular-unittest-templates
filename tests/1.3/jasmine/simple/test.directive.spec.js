/**
 * Created by Oleg Galaburda on 30.07.15.
 */
(function() {
  'use strict';

  var MODULE_NAME = 'aw.test';
  var DIRECTIVE_HTML_NAME = 'test';
  var DIRECTIVE_NAME = _getDirectiveName();

  describe(MODULE_NAME, function() {
    var $q = null;
    var $rootScope = null;
    var $compile = null;
    var $timeout = null;
    var $httpBackend = null;

    var element = null;
    var controller = null;
    var $parentScope = null;
    var $scope = null;
    var timeService = null;

    function TestTimeService() {
      var _this = this;
      _this.getTimeValue = '1234567890123';
      _this.getTime = function() {
        return _this.getTimeValue;
      };
      spyOn(_this, 'getTime').and.callThrough();
    }

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME, function($provide) {
      $provide.service('testTimeService', TestTimeService);
    }));

    describe(DIRECTIVE_HTML_NAME, function() {

      // Unit Tests for "test" Directive, "aw.test" module

      describe('When initialized', function() {
        beforeEach(function() {
          spyOn(controller, 'validateForm').and.callThrough();
          $timeout.flush();
        });
        it('should call onReady event handler', function() {
          expect($parentScope.onReady.calls.count()).toEqual(1);
        });
        it('should pass time of ready event', function() {;
          expect($parentScope.onReady.calls.mostRecent().args[0]).toMatch(/^\d{13}$/);
        });
        it('should validate form', function() {
          expect(controller.validateForm).toHaveBeenCalled();
        });
        it('buttonEnabled should be FALSE', function() {
          expect(controller.buttonEnabled).toBeFalsy();
        });
      });

      describe('When text passed', function() {
        var textValue = 'Some text';
        beforeEach(function() {
          spyOn(controller, 'validateForm').and.callThrough();
          $parentScope.text = textValue;
          $parentScope.$digest();
        });
        it('should validate form', function() {
          expect(controller.validateForm).toHaveBeenCalled();
        });
        it('buttonEnabled should be FALSE', function() {
          expect(controller.buttonEnabled).toBeFalsy();
        });
        describe('When state changed to "ready"', function() {
          beforeEach(function() {
            $timeout.flush();
          });
          it('buttonEnabled should be TRUE', function() {
            expect(controller.buttonEnabled).toBeTruthy();
          });
        });
      });

      describe('When button clicked', function() {
        beforeEach(function() {
          controller.click();
        });
        it('should call onClick event handler', function() {
          expect($parentScope.onClick.calls.count()).toEqual(1);
        });
        it('should pass time of click event', function() {
          expect($parentScope.onClick.calls.mostRecent().args[0]).toMatch(/^\d{13}$/);
        });
      });

      //End

      /**
       * Create environment and new directive instance
       */
      beforeEach(inject(function() {
        $parentScope = $rootScope.$new(true);
        $parentScope.onReady = jasmine.createSpy('onReady');
        $parentScope.onClick = jasmine.createSpy('onClick');

        element = angular.element('<' + DIRECTIVE_HTML_NAME + ' text="{{text}}" on-ready="onReady(time)" on-click="onClick(time)"></' + DIRECTIVE_HTML_NAME + '>');
        $compile(element)($parentScope);
        $httpBackend.flush(); // for external template
        //$parentScope.$digest(); // for embedded template
        controller = element.controller(DIRECTIVE_NAME);
        $scope = element.isolateScope();
      }));

      /**
       * Clear test, remove created scope and other objects
       */
      afterEach(function() {
        if ($parentScope) {
          $parentScope.$destroy();
          $parentScope = null;
        }
        $scope = null;
        controller = null;
        element = null;
      });
    });

    /**
     * Add basic services for directives
     */
    beforeEach(inject(function(_$q_, _$rootScope_, _$compile_, _$httpBackend_, _$timeout_) {
      $q = _$q_;
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
      $timeout = _$timeout_;
    }));

    beforeEach(function() {
      $httpBackend.whenGET(/test\.directive\.html$/).respond(200, '<div/>');
    });
  });

  function _getDirectiveName() {
    var list = DIRECTIVE_HTML_NAME.split('-');
    var name = list.shift();
    while (list.length) {
      var item = list.shift();
      name += item[0].toUpperCase() + item.substr(1);
    }
    return name;
  }
})();