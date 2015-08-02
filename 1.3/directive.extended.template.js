/**
 * Created by ${USER} on ${DATE}.
 */
(function() {
  'use strict';

  var MODULE_NAME = '${Module_name}';
  var DIRECTIVE_HTML_NAME = '${Directive_HTML_name}';
  var DIRECTIVE_NAME = _getDirectiveName();

  describe(('${Test_category}' || MODULE_NAME), function() {
    var ${DS}q = null;
    var ${DS}rootScope = null;
    var ${DS}compile = null;
    var ${DS}timeout = null;
    var ${DS}httpBackend = null;

    var element = null;
    var controller = null;
    var ${DS}parentScope = null;
    var ${DS}scope = null;

    function MockedService() {

    }

    function MockedDirectiveController() {

    }

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME, function(${DS}provide, ${DS}compileProvider) {
      ${DS}provide.service('mockedService', MockedService);
	    mockDirective(${DS}compileProvider, 'mockedDirective', MockedDirectiveController);
    }));

    describe(('${Test_description}' || DIRECTIVE_HTML_NAME), function() {

      it('#self-test', function() {
        expect(${DS}parentScope).to.be.ok;
        expect(element).to.be.ok;
        expect(controller).to.be.ok;
        expect(${DS}scope).to.be.ok;
        expect(${DS}scope.${DS}parent).to.be.equal(${DS}parentScope);
      });

      // Unit Tests for "${Directive_HTML_name}" Directive, "${Module_name}" module

      describe('When ', function() {
        beforeEach(function() {

        });
        it('should ', function() {

        });
      });

      //End
      /**
       * Mock directive template and pre-configure
       */
      beforeEach(inject(function() {
        ${DS}httpBackend.whenGET(new RegExp(DIRECTIVE_NAME+'\\.directive\\.html${DS}')).respond(200, '<div/>');
      }));
      /**
       * Create and initialize Directive
       */
      beforeEach(createEnvironment);
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
      ${DS}parentScope = ${DS}rootScope.${DS}new(true);
      element = createDirective();
      controller = element.controller(DIRECTIVE_NAME);
      ${DS}scope = element.isolateScope();
    }

    function createDirective() {
      var element = angular.element('<' + DIRECTIVE_HTML_NAME + '></' + DIRECTIVE_HTML_NAME + '>');
      ${DS}compile(element)(${DS}parentScope);
      ${DS}httpBackend.flush();
      configureDirective();
      ${DS}parentScope.${DS}digest();
      return element;
    }

    /**
     * Dynamic function that can hold additional configuration for directive that will be added right after its creation
     * @type {Function}
     */
    var configureDirective = function () {
      // anything that should be available to directive through ${DS}parentScope
    };

    /**
     * Clear test, remove created scope and other objects
     */
    function destroyEnvironment() {
      if (${DS}parentScope) {
        ${DS}parentScope.${DS}destroy();
        ${DS}parentScope = null;
      }
      ${DS}rootScope = null;
      ${DS}scope = null;
      controller = null;
      element = null;
    }

    /**
     * Add basic services for directives
     */
    beforeEach(inject([
      '${DS}q',
      '${DS}rootScope',
      '${DS}compile',
      '${DS}httpBackend',
      '${DS}timeout',
      function(_${DS}q_, _${DS}rootScope_, _${DS}compile_, _${DS}httpBackend_, _${DS}timeout_) {
        ${DS}q = _${DS}q_;
        ${DS}rootScope = _${DS}rootScope_;
        ${DS}compile = _${DS}compile_;
        ${DS}httpBackend = _${DS}httpBackend_;
        ${DS}timeout = _${DS}timeout_;
      }
    ]));
  });

  /**
   * Wrapper for ${DS}compileProvider.directive(), that allows to mock directives preventing their execution while unit-tests
   */
  function mockDirective(${DS}compileProvider, name, controller, link){
    ${DS}compileProvider.directive(name, function(){
      return {
        priority: 4092,
        name: name,
        terminal: true,
        restrict:'AE',
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