var m2App = angular.module('m2App',[]);

m2App.run(function($rootScope, $interval) {
  
  // initializes progress bar bound values and starts the clock ticking
  $rootScope.makeItGo = function() {
    // Setting values here in example, normally would come from some other component
    $rootScope.playPosition = 0;
    $rootScope.playDuration = 5000;
    console.log('Beginning progress bar...');
    var prog = $interval(function() {
      if ($rootScope.playPosition < $rootScope.playDuration) {
        $rootScope.playPosition += 1;
      } else {
        console.log('Ending progress bar.');
        $interval.cancel(prog);
      }
    }, 2);
  };

  // start the progress bar going right away
  $rootScope.makeItGo();
});

// Directive that tracks playback progress. Usage in the player:
// <track-progress-bar
//   cur-val='{{playPosition}}'
//   max-val='{{playDuration}}'></track-progress-bar>
// adapted from http://codepen.io/marknalepka/pen/Ewzxc
m2App.directive('trackProgressBar', [function () {

  return {
    restrict: 'E', // element
    scope: {
      curVal: '@', // bound to 'cur-val' attribute, playback progress
      maxVal: '@'  // bound to 'max-val' attribute, track duration
    },
    template: '<div class="progress-bar-bkgd"><div class="progress-bar-marker"></div></div>',

    link: function ($scope, element, attrs) {
      // grab element references outside the update handler
      var progressBarBkgdElement = angular.element(element[0].querySelector('.progress-bar-bkgd')),
          progressBarMarkerElement = angular.element(element[0].querySelector('.progress-bar-marker'));

      // set the progress-bar-marker width when called
      function updateProgress() {
        var progress = 0,
            currentValue = $scope.curVal,
            maxValue = $scope.maxVal,
            // recompute overall progress bar width inside the handler to adapt to viewport changes
            progressBarWidth = progressBarBkgdElement.prop('clientWidth');

        if ($scope.maxVal) {
          // determine the current progress marker's width in pixels
          progress = Math.min(currentValue, maxValue) / maxValue * progressBarWidth;
        }

        // set the marker's width
        progressBarMarkerElement.css('width', progress + 'px');
      }

      // curVal changes constantly, maxVal only when a new track is loaded
      $scope.$watch('curVal', updateProgress);
      $scope.$watch('maxVal', updateProgress);
    }
  };
}]);


