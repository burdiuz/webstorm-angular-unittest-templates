/**
 * Created by Oleg Galaburda on 24.07.15.
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

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME));

    describe(DIRECTIVE_HTML_NAME, function() {

      // Unit Tests for "test" Directive, "aw.test" module

      it('Test', function() {

      });

      //End

      /**
       * Create environment and new directive instance
       */
      beforeEach(inject(function() {
        $parentScope = $rootScope.$new(true);
        element = angular.element('<' + DIRECTIVE_HTML_NAME + '></' + DIRECTIVE_HTML_NAME + '>');
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