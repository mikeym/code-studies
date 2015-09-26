'use strict';

// Testing the controller that handles the contact form
describe('ContactCtrl controller tests', function() {
  var ContactCtrl,
      scope,
      http,
      window,
      formElement,
      form,
      httpBackend;

  beforeEach(module('m2App'));

  beforeEach(inject(function ($rootScope, $controller, $http, $compile, $window, $httpBackend) {
    scope = $rootScope;
    http = $http;
    window = $window;
    ContactCtrl = $controller('ContactCtrl', {$scope: scope, $http: http, $window: window});
    httpBackend = $httpBackend;

    // subset of the contact form, minus labels & other stuff
    formElement = angular.element(
        '<form role="form" id="contactform" name="contactform" ng-submit="submitForm()" method="post" novalidate>' +
        '<input type="text" id="realname" name="realname" ng-model="msg.realname" required>' +
        '<input type="email" id="email" name="email" ng-model="msg.email" required>' +
        '<input type="text" id="subject" name="subject" ng-model="msg.subject" required>' +
        '<textarea id="comments" name="comments" ng-model="msg.comments" required></textarea>' +
        '<button id="btn" type="submit">Send message</button>'
    );

    // compile our template above into the scope
    $compile(formElement)(scope);

    // initialize the model for whatever weird reason
    scope.msg = {
      realname: null,
      email: null,
      subject: null,
      comments: null
    };
    scope.$apply();

    // get a refrence to the form for our tests
    form = scope.contactform;

  }));

  it('should have correct initial values', function () {
    expect(scope.resultMessageClass).toEqual('hidden');
    expect(scope.resultMessage).toEqual('');
    expect(scope.submitted).toBeFalsy();
    expect(scope.bigIcon).toEqual('fa-pencil fa-flip-horizontal');
  });

});
