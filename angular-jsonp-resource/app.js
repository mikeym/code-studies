
(function() {
  'use strict';
  
  // The manual call to retrieve a few hundred rows of JSONP data from the USDA:
  // http://quickstats.nass.usda.gov/api/api_GET?key=EE158886-64E4-3EB1-8DB8-ACD658FBD322&sector_desc=ENVIRONMENTAL&commodity_desc=BLUEBERRIES&agg_level_desc=STATE&state_alpha=WA
  
  // This service encapsulates an Angular $resource that produces the same JSONP data
  // result as the above URL. Note that I needed to include parameters as part of the
  // URL argument, as the USDA's API is sensitive about parameter ordering, and the 
  // params object could randomize this. That's my API key, they'll give you one if
  // you ask here: http://quickstats.nass.usda.gov/api
  function usdaDataService($resource) {
    var usdaResource = $resource(
      'http://quickstats.nass.usda.gov/api/api_GET?key=EE158886-64E4-3EB1-8DB8-ACD658FBD322' +
      '&sector_desc=ENVIRONMENTAL&commodity_desc=BLUEBERRIES&agg_level_desc=STATE&state_alpha=WA',
      { callback: 'JSON_CALLBACK' },
      { getUsdaData: {                  // call this in the controller
          method: 'JSONP',
          isArray: false,               // this API call returns an object
          params: { }                   // param order here not guaranteed
        }
      });
        
    return usdaResource; // $resource includes a promise, very handy
  }
  
  // Simple controller that makes the USDA's resource data available to the view.
  function UsdaDataCtrl($scope, $log, usdaDataService) {
    var vm = this;

    vm.usdaData; // resolves to the USDA data object, or null if there's a problem

    // Imediately executed, gets USDA service data via the resource
    (function getServiceData() {
      $log.info('vm.getServiceData was called');

      // Uses the resource to obtain the data. Lengthy operation that uses the
      // built-in promise. My error handling could be improved upon.
      usdaDataService.getUsdaData().$promise
        .then(
          function(usdaData) {
            $log.info('getServiceData: ' + usdaData.data[0].state_name);
            vm.usdaData = usdaData;
          },
          function(error) {
            $log.error('getServiceData: ' + error);
            vm.usdaData = null;
          });
    })();
  }
  
  // Our angular app has one controller and one service. The service relies on
  // the ngResource module, which is loaded separately.
  angular
    .module('MyApp', ['ngResource'])
    .factory('usdaDataService', usdaDataService)
    .controller('UsdaDataCtrl', UsdaDataCtrl);
  
})();

