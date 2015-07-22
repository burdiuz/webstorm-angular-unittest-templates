/**
 * Created by ${USER} on ${DATE}.
 */
(function() {
  'use strict';

  var MODULE_NAME = '${Module_name}';
  var DIRECTIVE_HTML_NAME = '${Directive_HTML_name}';
  var DIRECTIVE_NAME = _getDirectiveName();

  describe(MODULE_NAME, function() {
    var ${DS}q = null;
    var ${DS}rootScope = null;
    var ${DS}compile = null;
    var ${DS}timeout = null;
    var ${DS}httpBackend = null;

    var element = null;
    var controller = null;
    var ${DS}parentScope = null;
    var ${DS}scope = null;

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME));

    describe(DIRECTIVE_HTML_NAME, function() {

      // Unit Tests for "${Directive_HTML_name}" Directive, "${Module_name}" module

      it('Test', function() {

      });

      //End

      /**
       * Create environment and new directive instance
       */
      beforeEach(inject(function() {
        ${DS}parentScope = ${DS}rootScope.${DS}new(true);
        element = angular.element('<' + DIRECTIVE_HTML_NAME + '></' + DIRECTIVE_HTML_NAME + '>');
        ${DS}compile(element)(${DS}parentScope);
        ${DS}httpBackend.flush(); // for external template
        //${DS}parentScope.${DS}digest(); // for embedded template
        controller = element.controller(DIRECTIVE_NAME);
        ${DS}scope = element.isolateScope();
      }));

      /**
       * Clear test, remove created scope and other objects
       */
      afterEach(function() {
        if (${DS}parentScope) {
          ${DS}parentScope.${DS}destroy();
          ${DS}parentScope = null;
        }
        ${DS}scope = null;
        controller = null;
        element = null;
      });
    });

    /**
     * Add basic services for directives
     */
    beforeEach(inject(function(_${DS}q_, _${DS}rootScope_, _${DS}compile_, _${DS}httpBackend_, _${DS}timeout_) {
      ${DS}q = _${DS}q_;
      ${DS}rootScope = _${DS}rootScope_;
      ${DS}compile = _${DS}compile_;
      ${DS}httpBackend = _${DS}httpBackend_;
      ${DS}timeout = _${DS}timeout_;
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