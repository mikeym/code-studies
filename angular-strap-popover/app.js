// Include a reference to ngStrap like this
var popupApp = angular.module('popupApp', ['mgcrea.ngStrap']);

// This demo doesn't really need a controller but hey.
popupApp.controller('AppCtrl', ['$scope', function($scope) {
  
}]);

// Directive that displays an image within an Angular Strap popup.
// This directive should only be applied to an img, as it expects a 'src' attribute.
popupApp.directive('imagePopup', ['$popover', '$compile', '$window', function($popover, $compile, $window) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var myPopover = $popover(element, {
        title: attrs.popupTitle,
        template: 'angular-strap-popover-tpl.html',
        html: true,
        trigger: 'manual',
        autoClose: true,
        transclude: true,
        scope: scope,
        animation: 'am-fade'
      });

      // Toggle the popover closed when you click it
      scope.closeMe = function() {
        myPopover.toggle();
      };

      // Toggle the popover closed when you click the original smaller image.
      element.on('click', function(element) {
        myPopover.toggle();
      });
    },

    // Isolate scope, load the popup template image's src from the src attribute of the original image
    scope: {
      popupImageSrc: '@src'
    }

  }
}]);
