
(function() {
  'use strict';
  
  function MyCtrl($scope) {
    var vm = this;
    
    vm.model = {
      textwithvalidation: '',
      emailwithvalidation: '',
      formstatus: 'unsubmitted'
    }
    vm.form = { };
    
    vm.submitForm = function() {
      if (vm.form.test.$valid) {
        vm.model.formstatus = 'valid';
      } else {
        vm.model.formstatus = 'invalid';
      }
    }
    
    vm.clearForm = function() {
      vm.model.textwithvalidation = '';
      vm.model.emailwithvalidation = '';
      vm.model.formstatus = 'unsubmitted';
      vm.form.test.$setPristine();
    }
  }
  
  angular
    .module('MyApp', [
      'm2-validation-icon',
      'm2-validation-form-group'
    ])
    .controller('MyCtrl', MyCtrl);
  
})();

