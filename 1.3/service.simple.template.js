/**
 * Created by ${USER} on ${DATE}.
 */
(function() {
  'use strict';

  var MODULE_NAME = '${Module_name}';

  describe(MODULE_NAME, function() {
    var ${DS}q = null;
    var ${DS}httpBackend = null;
    /**
     * @type {${Service_name}}
     */
    var service = null;

    describe('${Service_name}', function() {
      // Unit Tests for "${Service_name}" Service, "${Module_name}" module

      describe('When ', function() {
        beforeEach(function() {

        });
        it('should ', function() {

        });
      });

      //End
      /**
       * Create service
       */
      beforeEach(inject(function(${Service_name}) {
        service = ${Service_name};
      }));

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
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME));

    /**
     * Add basic services
     */
    beforeEach(inject(function(_${DS}q_, _${DS}httpBackend_) {
        ${DS}q = _${DS}q_;
        ${DS}httpBackend = _${DS}httpBackend_;
    }));
  });

})();