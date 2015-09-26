'use strict';

describe('AppCtrl controller tests with null route params', function() {
  var AppCtrl,
      scope,
      qsv;

  beforeEach(module('m2App'));

  beforeEach(inject(function ($rootScope, $controller, $route) {
    scope = $rootScope.$new();
    AppCtrl = $controller('AppCtrl', {$scope: scope, $route: $route});
    qsv = m2App.qsv;
  }));

  it('should have an AppCtrl controller', function () {
    expect(AppCtrl).not.toBeNull();
  });

});
