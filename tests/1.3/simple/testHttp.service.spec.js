/**
 * Created by Oleg Galaburda on 24.07.15.
 */
(function() {
  'use strict';

  var MODULE_NAME = 'aw.test';

  describe(MODULE_NAME, function() {
    var $q = null;
    var $httpBackend = null;
    /**
     * @type {testHttpService}
     */
    var service = null;

    describe('testHttpService', function() {
      // Unit Tests for "testHttpService" Service, "aw.test" module

      it('Test', function() {

      });

      //End
      /**
       * Create service
       */
      beforeEach(inject(function(testHttpService) {
        service = testHttpService;
      }));

      /**
       * Clear test, remove service instance
       */
      afterEach(function() {
        service = null;
        $httpBackend.verifyNoOutstandingExpectation();
        //$httpBackend.verifyNoOutstandingRequest();
      });
    });

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME));

    /**
     * Add basic services
     */
    beforeEach(inject(function(_$q_, _$httpBackend_) {
      $q = _$q_;
      $httpBackend = _$httpBackend_;
    }));
  });

})();