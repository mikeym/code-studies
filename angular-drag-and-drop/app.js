(function() {
  'use strict';

  function NestedListsDemoController($scope) {

    $scope.models = {
      selected: null,
      templates: [
        {type: 'item', id: 2},
        {type: 'container', id: 1, columns: [[], []]}
      ],
      dropzones: {
        'These Things': [
          {
            'type': 'container',
            'id': 1,
            'columns': [
              [
                {
                  'type': 'item',
                  'id': 2
                },
                {
                  'type': 'item',
                  'id': 3
                }
              ],
              [
                {
                  'type': 'item',
                  'id': 4
                }
              ]
            ]
          },
          {
            'type': 'item',
            'id': 5
          },
          {
            'type': 'item',
            'id': 6
          },
          {
            'type': 'item',
            'id': 7
          }
        ],
        "Those Things": [
          {
            'type': 'item',
            'id': 8
          },
          {
            'type': 'item',
            'id': 9
          },
          {
            'type': 'container',
            'id': 10,
            'columns': [
              [
                {
                  'type': 'item',
                  'id': 11
                },
                {
                  'type': 'item',
                  'id': 12
                },
                {
                  'type': 'item',
                  'id': 13
                }
              ],
              [
                {
                  'type': 'item',
                  'id': 14
                },
                {
                  'type': 'container',
                  'id': 15,
                  "columns": [
                    [
                      {
                        'type': 'item',
                        'id': 16
                      }
                    ],
                    [
                      {
                        'type': 'item',
                        'id': 17
                      }
                    ]
                  ]
                },
                {
                  'type': 'item',
                  'id': 18
                },
                {
                  'type': 'item',
                  'id': 19
                }
              ]
            ]
          },
          {
            'type': 'item',
            'id': 20
          }
        ]
      }
    };

    $scope.$watch('models.dropzones', function(model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);

  }

  angular
      .module('MyApp', ['dndLists'])
      .controller('NestedListsDemoController', NestedListsDemoController);

})();
