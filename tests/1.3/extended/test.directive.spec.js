/**
 * Created by Oleg Galaburda on 24.07.15.
 */
(function() {
  'use strict';

  var MODULE_NAME = 'aw.test';
  var DIRECTIVE_HTML_NAME = 'test';
  var DIRECTIVE_NAME = _getDirectiveName();

  describe(('Directives' || MODULE_NAME), function() {
    var $q = null;
    var $rootScope = null;
    var $compile = null;
    var $timeout = null;
    var $httpBackend = null;

    var element = null;
    var controller = null;
    var $parentScope = null;
    var $scope = null;

    function MockedService() {

    }

    function MockedDirectiveController() {

    }

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME, function($provide, $compileProvider) {
      $provide.service('MockedService', MockedService);
      mockDirective($compileProvider, 'MockedDirective', MockedDirectiveController);
    }));

    describe(('aw.test::test' || DIRECTIVE_HTML_NAME), function() {

      it('#self-test', function() {
        expect($parentScope).to.be.ok;
        expect(element).to.be.ok;
        expect(controller).to.be.ok;
        expect($scope).to.be.ok;
        expect($scope.$parent).to.be.equal($parentScope);
      });

      // Unit Tests for "test" Directive, "aw.test" module

      it('Test', function() {

      });

      //End


      beforeEach(createEnvironment);
      // Additional beforeEach/afterEach statements for "RUN" phase add here
      /**
       * Template beforeEach wrapper for custom services and configuration
       */
      beforeEach(inject(function() {

      }));
      afterEach(destroyEnvironment);
    });

    /**
     * Create environment and new directive instance
     */
    function createEnvironment() {
      $parentScope = $rootScope.$new(true);
      element = createDirective();
      controller = element.controller(DIRECTIVE_NAME);
      $scope = element.isolateScope();
    }

    function createDirective() {
      var element = angular.element('<' + DIRECTIVE_HTML_NAME + '></' + DIRECTIVE_HTML_NAME + '>');
      $compile(element)($parentScope);
      $httpBackend.flush();
      configureDirective();
      $parentScope.$digest();
      return element;
    }

    /**
     * Dynamic function that can hold additional configuration for directive that will be added right after its creation
     * @type {Function}
     */
    var configureDirective = function() {
      // anything that should be available to directive through $parentScope
    };

    /**
     * Clear test, remove created scope and other objects
     */
    function destroyEnvironment() {
      if ($parentScope) {
        $parentScope.$destroy();
        $parentScope = null;
      }
      $rootScope = null;
      $scope = null;
      controller = null;
      element = null;
    }

    /**
     * Add basic services for directives
     */
    beforeEach(inject([
      '$q',
      '$rootScope',
      '$compile',
      '$httpBackend',
      '$timeout',
      function(_$q_, _$rootScope_, _$compile_, _$httpBackend_, _$timeout_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $httpBackend = _$httpBackend_;
        $timeout = _$timeout_;
      }
    ]));
  });

  /**
   * Wrapper for $compileProvider.directive(), that allows to mock directives preventing their execution while unit-tests
   */
  function mockDirective($compileProvider, name, controller, link) {
    $compileProvider.directive(name, function() {
      return {
        priority: 4092,
        name: name,
        terminal: true,
        restrict: 'AE',
        link: link,
        controller: controller
      };
    });
  }

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