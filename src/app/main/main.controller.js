(function() {
  'use strict';

  angular
    .module('angularChallenge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $location, $rootScope) {
      var vm = this;
      vm.selectedAcctype = '';
      vm.getAccData = function(){
        var accData = localStorage.getItem('accounts');
        var initialData = {"accounts": []};
        if(!accData)
          return initialData;
        else
          return angular.fromJson(accData);
      };
      vm.count = function(){
        vm.AccountsCount = {'all':0,'checking':0,'savings':0};
          if($rootScope.data.accounts.length){
          vm.AccountsCount.all = $rootScope.data.accounts.length
            for(var item in $rootScope.data.accounts){
              ($rootScope.data.accounts[item].type === 'Checking') ?vm.AccountsCount.checking++ :vm.AccountsCount.savings++;
            }
        }
      };
      $rootScope.data =vm.getAccData();
      vm.count();
      vm.accounts = $rootScope.data.accounts;
      vm.removeAccount = function(index){
        var accData = {"accounts": []};
        vm.accounts.splice(index,1);
        accData.accounts =vm.accounts;
        vm.count();
        localStorage.setItem("accounts",angular.toJson(accData));
    }
    
  }
})();
