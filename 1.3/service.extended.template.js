/**
 * Created by ${USER} on ${DATE}.
 */
(function() {
  'use strict';

  var MODULE_NAME = '${Module_name}';

  describe(('${Test_category}' || MODULE_NAME), function() {
    var ${DS}q = null;
    var ${DS}rootScope = null;
    var ${DS}timeout = null;
    var ${DS}httpBackend = null;
    /**
     * @type {${Service_name}}
     */
    var service = null;

    function MockedService() {

    }

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME, function(${DS}provide) {
      ${DS}provide.service('MockedService', MockedService);
    }));

    describe(('${Test_description}' || '${Service_name}'), function() {

      it('#self-test', function() {
        expect(service).to.be.ok;
      });

      // Unit Tests for "${Service_name}" Service, "${Module_name}" module

      it('Test', function() {

      });

      //End

      /**
       * Create service
       */
      beforeEach(inject([
        '${Service_name}',
        function(${Service_name}) {
          service = ${Service_name};
        }
      ]));

      /**
       * Clear test, remove service instance
       */
      afterEach(function() {
        service = null;
        ${DS}httpBackend.verifyNoOutstandingExpectation();
        //${DS}httpBackend.verifyNoOutstandingRequest();
      });
    });

    /**
     * Add basic services
     */
    beforeEach(inject([
      '${DS}q',
      '${DS}rootScope',
      '${DS}httpBackend',
      '${DS}timeout',
      function(_${DS}q_, _${DS}rootScope_, _${DS}httpBackend_, _${DS}timeout_) {
        ${DS}q = _${DS}q_;
        ${DS}rootScope = _${DS}rootScope_;
        ${DS}httpBackend = _${DS}httpBackend_;
        ${DS}timeout = _${DS}timeout_;
      }
    ]));
  });

})();