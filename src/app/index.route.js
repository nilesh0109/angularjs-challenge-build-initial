(function() {
  'use strict';

  angular
    .module('angularChallenge')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/new', {
        templateUrl: 'app/main/addnew.html',
        controller: 'AddNewController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
