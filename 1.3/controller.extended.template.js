/**
 * Created by ${USER} on ${DATE}.
 */
(function() {
  'use strict';

  var MODULE_NAME = '${Module_name}';

  describe(('${Test_category}' || MODULE_NAME), function() {
    var ${DS}q = null;
    var ${DS}controller = null;
    var ${DS}timeout = null;
    var ${DS}rootScope = null;
    /**
     * @type {${Controller_name}}
     */
    var controller = null;
    var ${DS}scope = null;

    function MockedService(){

    }

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME, function(${DS}provide) {
      ${DS}provide.service('mockedService', MockedService);
    }));

    describe(('${Test_description}' || '${Controller_name}'), function(){

      it('#self-test', function() {
        expect(${DS}scope).to.be.ok;
        expect(controller).to.be.ok;
      });

      // Unit Tests for "${Controller_name}" Controller, "${Module_name}" module

      describe('When ', function() {
        beforeEach(function() {

        });
        it('should ', function() {

        });
      });

      //End

      beforeEach(createEnvironment);
      afterEach(destroyEnvironment);
    });

    /**
     * Add basic services
     */
    beforeEach(inject([
      '${DS}q',
      '${DS}rootScope',
      '${DS}controller',
      '${DS}timeout',
      function(_${DS}q_, _${DS}rootScope_, _${DS}controller_, _${DS}timeout_) {
        ${DS}q = _${DS}q_;
        ${DS}rootScope = _${DS}rootScope_;
        ${DS}controller = _${DS}controller_;
        ${DS}timeout = _${DS}timeout_;
     }
    ]));

    /**
     * Create environment and new controller instance
     */
    function createEnvironment(){
      ${DS}scope = ${DS}rootScope.${DS}new(true);
      controller = createControllerInstance();
    }

    /**
     * Return new controller instance
     */
    function createControllerInstance(){
      var controller = ${DS}controller('${Controller_name}', {
        ${DS}scope: ${DS}scope
      });
      return controller;
    }

    /**
     * Clear test, remove service instance
     */
    function destroyEnvironment(){
      if (${DS}scope) {
        ${DS}scope.${DS}destroy();
        ${DS}scope = null;
      }
      ${DS}rootScope = null;
      controller = null;
    }
  });

})();