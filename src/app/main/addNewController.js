(function() {
  'use strict';

  angular
    .module('angularChallenge')
    .controller('AddNewController', AddNewController);

  /** @ngInject */
  function AddNewController($scope, $location, $rootScope) {
    var vm = this;
    vm.formData = {};
    vm.options = [{ name:"Select",id:0},{name: "Checking", id: 1 }, { name: "Savings", id: 2 }];
    vm.selectedOption = vm.options[0];
    vm.accData = $rootScope.data;
    vm.navBack = function(){
       $location.path('#/');
    };
    vm.saveAccountDetails = function(){
        var accounts = vm.accData.accounts;
        if(vm.selectedOption.name === "Checking")
          accounts.push({'Amount':vm.formData.amount,'BIC':vm.formData.bic,'IBAN':vm.formData.iban,'type':vm.selectedOption.name});
        else
          accounts.push({'Amount':vm.formData.amount,'date':vm.formData.date,'Maturity':vm.formData.maturity,'type':vm.selectedOption.name});  
        localStorage.setItem("accounts",angular.toJson(vm.accData));
        $location.path('#/');
    }
  }
})();
