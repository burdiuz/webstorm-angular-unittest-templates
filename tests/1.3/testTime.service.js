/**
 * Created by Oleg Galaburda on 24.07.15.
 */
(function() {
  'use strict';

  function TestTimeService() {
    this.getTime = function(){
      return String(Date.now());
    }
  }

  angular.module('aw.test').service('testTimeService', TestTimeService);
})();