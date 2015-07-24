/**
 * Created by Oleg Galaburda on 24.07.15.
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

    function MockedService() {

    }

    /**
     * Template wrapper for registering mocked services
     */
    beforeEach(angular.mock.module(MODULE_NAME, function($provide) {
      $provide.service('MockedService', MockedService);
    }));

    describe(('aw.test::TestTimeService' || 'testTimeService'), function() {

      it('#self-test', function() {
        expect(service).to.be.ok;
      });

      // Unit Tests for "testTimeService" Service, "aw.test" module

      it('Test', function() {

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