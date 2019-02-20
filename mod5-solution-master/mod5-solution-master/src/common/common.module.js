(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://res-server2016.herokuapp.com')
.config(config);

//
//https://ychaikin-course5.herokuapp.com

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
