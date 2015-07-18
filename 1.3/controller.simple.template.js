/**
 * Created by ${USER} on ${DATE}.
 */
(function() {
  'use strict';

  var MODULE_NAME = '${Module_name}';
  var CONTROLLER_NAME = '${Controller_name}';

  describe(MODULE_NAME, function() {
    var ${DS}rootScope = null;
    /**
     * @type {${Controller_name}}
     */
    var controller = null;
    var ${DS}scope = null;

    describe(CONTROLLER_NAME, function() {
      // Unit Tests for "${Controller_name}" Controller, "${Module_name}" module

      it('Test', function() {

      });

      //End
      /**
       * Create environment and new controller instance
       */
      beforeEach(inject(function(${DS}controller) {
        ${DS}scope = ${DS}rootScope.${DS}new(true);
        controller = ${DS}controller(CONTROLLER_NAME, {
          ${DS}scope: ${DS}scope
        });
      }));

      /**
       * Clear test, remove service instance
       */
      afterEach(function (){
        if (${DS}scope) {
          ${DS}scope.${DS}destroy();
          ${DS}scope = null;
        }
        ${DS}rootScope = null;
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
    beforeEach(inject(function(_${DS}rootScope_) {
        ${DS}rootScope = _${DS}rootScope_;
    }));
  });
})();