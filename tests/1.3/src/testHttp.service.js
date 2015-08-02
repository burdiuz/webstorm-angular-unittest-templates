/**
 * Created by Oleg Galaburda on 23.07.15.
 */
(function() {
  'use strict';

  function TestHttpService($http) {
    this.load = function() {
      return $http.get('tests/1.3/data.json').then(function(result) {
        return result.data;
      });
    };
  }

  angular.module('aw.test').service('testHttpService', TestHttpService);
})();