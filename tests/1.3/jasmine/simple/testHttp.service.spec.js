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
     * @type {testHttpService}
     */
    var service = null;

    describe('testHttpService', function() {
      // Unit Tests for "testHttpService" Service, "aw.test" module

      describe('When load() succeeded', function() {
        var expectedResult = null;
        beforeEach(function(){
          expectedResult = {value: 'All hail Megathron'};
          $httpBackend.expectGET(/data\.json$/).respond(200, expectedResult);
        });
        it('should return data', function(){
          var spy = jasmine.createSpy('callback');
          service.load().then(function(data){
            expect(data).toBeTruthy();
            expect(data).toEqual(expectedResult);
            spy();
          });
          $httpBackend.flush();
          expect(spy).toHaveBeenCalled();
        });
      });

      describe('When load() failed', function() {
        beforeEach(function(){
          $httpBackend.expectGET(/data\.json$/).respond(404);
        });
        it('should reject promise on fail', function(){
          var spy = jasmine.createSpy('callback');
          service.load().catch(spy);
          $httpBackend.flush();
          expect(spy).toHaveBeenCalled();
        });
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