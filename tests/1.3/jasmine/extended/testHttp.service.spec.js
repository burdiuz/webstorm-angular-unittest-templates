/**
 * Created by Oleg Galaburda on 04.08.15.
 */
(function() {
  'use strict';

  var MODULE_NAME = 'aw.test';

  describe(('Services' || MODULE_NAME), function() {
    var $q = null;
    var $rootScope = null;
    var $timeout = null;
    var $httpBackend = null;
    /**
     * @type {testHttpService}
     */
    var service = null;

    function MockedService() {

    }

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME, function($provide) {
      $provide.service('mockedService', MockedService);
    }));

    describe(('aw.test::testHttpService' || 'testHttpService'), function() {

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
      beforeEach(inject([
        'testHttpService',
        function(testHttpService) {
          service = testHttpService;
        }
      ]));

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
     * Add basic services
     */
    beforeEach(inject([
      '$q',
      '$rootScope',
      '$httpBackend',
      '$timeout',
      function(_$q_, _$rootScope_, _$httpBackend_, _$timeout_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        $timeout = _$timeout_;
      }
    ]));
  });

})();