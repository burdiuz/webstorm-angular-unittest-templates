/**
 * Created by Oleg Galaburda on 30.07.15.
 */
(function() {
  'use strict';

  var MODULE_NAME = 'aw.test';

  describe(MODULE_NAME, function() {
    var $q = null;
    var $httpBackend = null;
    /**
     * @type {testTimeService}
     */
    var service = null;

    describe('testTimeService', function() {
      // Unit Tests for "testTimeService" Service, "aw.test" module

      describe('When call getTime()', function(){
        it('should return String', function() {
          expect(service.getTime()).toEqual(jasmine.any(String));
        });
        it('should return unix time stamp', function() {
          expect(service.getTime()).toMatch(/^\d{13}$/);
        });
      });

      //End
      /**
       * Create service
       */
      beforeEach(inject(function(testTimeService) {
        service = testTimeService;
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