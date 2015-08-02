/**
 * Created by Oleg Galaburda on 30.07.15.
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

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME));

    describe(('aw.test::testHttpService' || 'testHttpService'), function() {
      // Unit Tests for "testHttpService" Service, "aw.test" module

      describe('When load() succeeded', function() {
        var expectedResult = null;
        beforeEach(function(){
          expectedResult = {value: 'All hail Megathron'};
          $httpBackend.expectGET(/data\.json$/).respond(200, expectedResult);
        });
        it('should return data', function(done){
          service.load().then(function(data){
            expect(data).to.be.ok;
            expect(data).to.be.eql(expectedResult);
            done();
          });
          $httpBackend.flush();
        });
      });

      describe('When load() failed', function() {
        beforeEach(function(){
          $httpBackend.expectGET(/data\.json$/).respond(404);
        });
        it('should reject promise on fail', function(done){
          service.load().catch(function(){
            done();
          });
          $httpBackend.flush();
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