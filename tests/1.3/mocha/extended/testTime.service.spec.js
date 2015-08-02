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
     * @type {testTimeService}
     */
    var service = null;

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME));

    describe(('aw.test::testTimeService' || 'testTimeService'), function() {

      // Unit Tests for "testTimeService" Service, "aw.test" module

      describe('When call getTime()', function(){
        it('should return String', function() {
          expect(service.getTime()).to.be.a('string');
        });
        it('should return unix time stamp', function() {
          var value = service.getTime();
          expect(value).to.have.length(13);
          expect(value).to.match(/^\d+$/);
        });
      });

      //End

      /**
       * Create service
       */
      beforeEach(inject([
        'testTimeService',
        function(testTimeService) {
          service = testTimeService;
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