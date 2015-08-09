// Simple AngularJS controller for email field validation example
angular.module('inputControlsApp', [ ])

  // only the one controller in this little example
  .controller('AppCtrl', ['$scope', function($scope) {
    
    // Page data model, initially blank ('pristine') with our own status tracking
    $scope.model = { 
      defaultvalidation: '',                 // email field without validation
      requiredmax120: '',            
      requiredimmediate: '',
      customvalidation: '',
      formstatus: 'unsubmitted'         // status display
    };
    
    // Declare a reference to the form, which will be 'form.test' on the page
    $scope.form = { };
    
    // We don't actually submit this form anywhere, we just test validity
    // and report back.
    $scope.submitForm = function() {
      if ($scope.form.test.$valid) {
        $scope.model.formstatus = "valid";    // that was a happy form  
      } else {
        $scope.model.formstatus = "invalid";  // sad trombone
      }
    };
    
    // Form clear function
    $scope.clearForm = function() {
      // clear the fields
      $scope.model.defaultvalidation = '';
      $scope.model.requiredmax120 = '';
      $scope.model.requiredimmediate = '';
      $scope.model.customvalidation = '';
      // reset our internal state
      $scope.model.formstatus = 'unsubmitted';
      // reset the field validation for the form
      $scope.form.test.$setPristine();
    };
  }])
  
  // custom validation directive for the last email field, courtest of the Angular JS docs  
  .directive('customEmailValidator', function() {
    
    // validation regex must be an email that ends with 'toadfart.com'. Because.
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@toadfart\.com$/i;
  
    return {
      require: 'ngModel',
      restrict: '',
      link: function(scope, elm, attrs, ctrl) {
        // only apply the validator if ngModel is present and Angular has added the email validator
        if (ctrl && ctrl.$validators.email) {
  
          // this will overwrite the default Angular email validator
          ctrl.$validators.email = function(modelValue) {
            return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
          };
        }
      }
    };
  });    

