 
 describe('AppCtrl controller tests with null route params', function() {
  var AppCtrl,
      scope,
      qsv;

  beforeEach(module('m2App'));

  beforeEach(inject(function($rootScope, $controller, $route){
    scope = $rootScope.$new();
    AppCtrl = $controller('AppCtrl', {$scope: scope, $route: $route});
    qsv = m2App.qsv;
  }));

  it('should have an AppCtrl controller', function() {
    expect(AppCtrl).not.toBeNull();
  });

  it('should have a valid home link', function() {
    expect(scope.homeLink).toEqual('home' + qsv);
  });

  it('should have a valid design link', function() {
    expect(scope.designLink).toEqual('design' + qsv);
  });

  it('should have a valid music link', function() {
    expect(scope.musicLink).toEqual('music' + qsv);
  });

  it('should have a valid articles link', function() {
    expect(scope.articlesLink).toEqual('articles' + qsv);
  });

  it('should have a valid contact link', function() {
    expect(scope.contactLink).toEqual('contact' + qsv);
  });

  it('should return a title of "deep gray sea" when route is undefined', function() {
    expect(scope.pageTitle()).toEqual('deep gray sea');
  });

  it('should return a linkToActivate of "home" when route is undefined', function() {
    expect(scope.linkToActivate()).toEqual('home');
  });

  it('should have a valid android design link', function() {
    expect(scope.androiddesignLink).toEqual('androiddesign' + qsv);
  });

  it('should have a valid bahai prayers link', function() {
    expect(scope.bahaiprayersLink).toEqual('bahaiprayers' + qsv);
  });

  it('should have a valid desktop communicator link', function() {
    expect(scope.desktopLink).toEqual('desktop' + qsv);
  });

  it('should have a valid in-house admin link', function() {
    expect(scope.ihaLink).toEqual('iha' + qsv);
  });

  it('should have a valid mta link', function() {
    expect(scope.mtaLink).toEqual('mta' + qsv);
  });

  it('should have a valid ui style guide link', function() {
    expect(scope.uistyleguideLink).toEqual('uistyleguide' + qsv);
  });

  it('should have a valid ux artifacts link', function() {
    expect(scope.uxartifactsLink).toEqual('uxartifacts' + qsv);
  });

  it('should have a valid wcx link', function() {
    expect(scope.wcxLink).toEqual('wcx' + qsv);
  });

  it('should have a valid webcomm link', function() {
    expect(scope.webcommLink).toEqual('webcomm' + qsv);
  });

  it('should have a valid deep gray sea link', function() {
    expect(scope.deepgrayseaLink).toEqual('deepgraysea' + qsv);
  });

  it('should have a valid drug pilots link', function() {
    expect(scope.drugpilotsLink).toEqual('drugpilots' + qsv);
  });

  it('should have a valid solo piano link', function() {
    expect(scope.solopianoLink).toEqual('solopiano' + qsv);
  });

  it('should have a valid xaml article 1 link', function() {
    expect(scope.illustratorimagesforxamlLink).toEqual('illustratorimagesforxaml' + qsv);
  });

  it('should have a valid xaml article 2 link', function() {
    expect(scope.importingimagesinblendLink).toEqual('importingtoxaml' + qsv);
  });

  it('should have a valid xaml article 3 link', function() {
    expect(scope.xamltemplateswappingLink).toEqual('xamltemplateswapping' + qsv);
  });

  it('should have a valid poppy article link', function() {
    expect(scope.rememberingPoppyLink).toEqual('rememberingpoppy' + qsv);
  });

  it('should have a valid treehouse article link', function() {
    expect(scope.treehouseLink).toEqual('treehouse' + qsv);
  });

  it('should have a valid plant a tree article link', function() {
    expect(scope.plantatreeLink).toEqual('plantatree' + qsv);
  });

});

describe('AppCtrl controller tests with valid route params', function() {
  var AppCtrl,
      scope,
      fakeRoute = {
        current: {
          $$route: {
            title: 'prune sauce',
            activeNav: 'toad farts',
            description: 'dill pickles',
            footerEmail: 'I\'ll tell you about my mother...'
          }
        }
      };

  beforeEach(module('m2App'));

  beforeEach(inject(function($rootScope, $controller, $route){
    scope = $rootScope.$new();
    AppCtrl = $controller('AppCtrl', {$scope: scope, $route: fakeRoute});
  }));

  it('should return a title that matches the route title when route is defined', function() {
    expect(scope.pageTitle()).toEqual('prune sauce');
  });

  it('should return a linkToActivate that matches the route activeNav when route is defined', function() {
    expect(scope.linkToActivate()).toEqual('toad farts');
  });

  it('should return an appropriate description for the page when route is defined', function() {
    expect(scope.pageDescription()).toEqual('dill pickles');
  })

  it('should return an appropriate email link text for the page when route is defined', function() {
    expect(scope.footerEmailText()).toEqual('I\'ll tell you about my mother...');
  })

});

