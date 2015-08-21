// Simple AngularJS controller for email field validation example
angular.module('inputControlsApp', [ ])

  // only the one controller in this little example
    .controller('AppCtrl', ['$scope', function($scope) {

      // Page data model, initially blank ('pristine') with our own status tracking
      $scope.model = {
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
    })

    .directive('fieldValidationIcon', function($compile, $log) {
      return {
        restrict: 'A',
        replace: false,
        //template: '<span class="glyphicon form-control-feedback" aria-hidden="true" ng-class="glyphicon-signal"></span>',
        fieldValidationIconClass: '',
        scope: true,

        // TODO: not updating reliably. Seems clumsy to look at class. Can we see '$pristine' etc.
        // TODO: can we use the template?
        // TODO: http://shazwazza.com/post/Listening-for-validation-changes-in-AngularJS

        link: function(scope, element, attrs) {
          var iconClass = '';

          scope.$watch(function() {
            if (element.hasClass('ng-pristine')) {
              scope.statusIconClass = 'glyphicon-asterisk';
            } else if (element.hasClass('ng-invalid') && element.hasClass('ng-dirty')) {
              scope.statusIconClass = 'glyphicon-remove';
            } else if (element.hasClass('ng-valid') && element.hasClass('ng-dirty')) {
              scope.statusIconClass = 'glyphicon-ok';
            }
          });

          var icon = angular.element('<span class="glyphicon form-control-feedback" ' +
                                     'aria-hidden="true" ng-class="statusIconClass"></span>');

          $compile(icon)(scope);
          element.after(icon);
        }
      }
    })

    // Displays a small icon on the right side of an input field under appropriate circumstances.
    // The input must have a name, and must be within a form that has a name.
    // Depends on Bootstrap styles.
    // Two posts by Shazwazza were helpful:
    // http://shazwazza.com/post/Reference-the-current-form-controller-in-AngularJS
    // http://shazwazza.com/post/Listening-for-validation-changes-in-AngularJS
    .directive('showValidationIcon', function($compile) {
      return {
        require: ['ngModel', '^form'], // ngModel is ctrls[0], ngForm (in the current directive's ancestry) is ctrls[1]
        restrict: 'A',                 // attribute use only
        replace: false,                // don't replace the input element, we'll add something to the end
        scope: true,                   // create a new scope for the input element, inherit from parent scope

        link: function(scope, element, attr, ctrls) {
          var iconTemplate = '<span class="glyphicon form-control-feedback" aria-hidden="true" ng-class="statusIconClass"></span>',
              iconElement,             // iconTemplate after compiling
              modelCtrl,               // ctrls[0], the model
              formCtrl,                // ctrls[1], the form's controller
              controlIsValid,          // true when the input is valid
              controlIsRequired,       // true when the input has a 'required' attribute
              controlIsDirty,          // true when the input's value has been modified
              handleStateChange;       // function called whenever an input's state value changes

          if (!attr.name) {
            throw 'showValidationIcon should only be set on a form element with a name attribute.';
          }

          modelCtrl = ctrls[0];
          if (!modelCtrl) {
            throw 'showValidationIcon should only be set on a form element with an ng-model attribute.';
          }

          formCtrl = ctrls[1];
          if (!formCtrl || !formCtrl.$name) {
            throw 'showValidationIcon requires a name attribute be assigned to the ng-form containing the input field.';
          }

          scope.statusIconClass = ''; // class value, bound into element scope, used by ng-class in template

          // called whenever $valid or $dirty values change for the input
          handleStateChange = function () {
            if (controlIsRequired && !controlIsDirty) {
              scope.statusIconClass = 'glyphicon-asterisk';
            } else if (controlIsDirty && !controlIsValid) {
              scope.statusIconClass = 'glyphicon-remove';
            } else if (controlIsDirty && controlIsValid) {
              scope.statusIconClass = 'glyphicon-ok';
            } else {
              scope.statusIconClass = '';
            }
          };

          // not expecting dynamic changes to the field's 'required' attribute
          controlIsRequired = attr.required;

          // watch the form's validation state for the control
          scope.$watch(formCtrl.$name + '.' + ctrls[0].$name + '.$valid', function(isValid) {
            controlIsValid = isValid;
            handleStateChange();
          });

          // watch the form's dirty state for the control
          scope.$watch(formCtrl.$name + '.' + ctrls[0].$name + '.$dirty', function(isDirty) {
            controlIsDirty = isDirty;
            handleStateChange();
          });

          // compile the icon into the element's scope, then add it to the DOM after the input.
          iconElement = angular.element(iconTemplate);
          $compile(iconElement)(scope);
          element.after(iconElement);

        }
      }
    });
