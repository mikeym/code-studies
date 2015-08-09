// Simple AngularJS controller for text field validation example

angular.module('textControlsApp', [ ])

  // only the one controller in this little example
  .controller('AppCtrl', ['$scope', function($scope) {
    
    // Page data model, initially blank ('pristine') with our own status tracking
    $scope.model = { 
      novalidation: '',                 // text field without validation
      requiredmaxtwenty: '',            // text field, required, max 20 chars
      requiredimmediate: '',            // text field updates immediately
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
      $scope.model.novalidation = '';
      $scope.model.requiredmaxtwenty = '';
      $scope.model.requiredimmediate = '';
      // reset our internal state
      $scope.model.formstatus = 'unsubmitted';
      // reset the field validation for the form
      $scope.form.test.$setPristine();
    };
}]);

