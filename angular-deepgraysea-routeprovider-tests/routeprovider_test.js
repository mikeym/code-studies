describe('Tests for top-level views in the route provider', function() {

  // Load the app
  beforeEach(module('m2App'));

  // Test the routes
  it('should have correct values for the home view', inject(function($route) {
    expect($route.routes['/'].controller).toEqual('AppCtrl');
    expect($route.routes['/'].templateUrl).toEqual('partials/home.html');
    expect($route.routes['/'].title).toEqual('deep gray sea : home');
    expect($route.routes['/'].description).toEqual('Music and design portfolio of Mikey Micheletti, Seattle-area designer and musician.');
    expect($route.routes['/'].activeNav).toEqual('home');
    expect($route.routes['/'].footerEmail).toEqual('email is so wonderful');
    expect($route.routes['/home'].controller).toEqual('AppCtrl');
    expect($route.routes['/home'].templateUrl).toEqual('partials/home.html');
    expect($route.routes['/home'].title).toEqual('deep gray sea : home');
    expect($route.routes['/home'].description).toEqual('Music and design portfolio of Mikey Micheletti, Seattle-area designer and musician.');
    expect($route.routes['/home'].activeNav).toEqual('home');
    expect($route.routes['/home'].footerEmail).toEqual('email is so wonderful');
  }));

  it('should have correct values for the design view', inject(function($route) {
    expect($route.routes['/design'].controller).toEqual('AppCtrl');
    expect($route.routes['/design'].templateUrl).toEqual('partials/design.html');
    expect($route.routes['/design'].title).toEqual('deep gray sea : design');
    expect($route.routes['/design'].description).toEqual('Application and website design work and UX artifacts from Mikey Micheletti, Seattle-area designer and musician.');
    expect($route.routes['/design'].activeNav).toEqual('design');
    expect($route.routes['/design'].footerEmail).toEqual('Tell me the special numbers I can use to win at Lotto');
  }));

  it('should have correct values for the music view', inject(function($route) {
    expect($route.routes['/music'].controller).toEqual('AppCtrl');
    expect($route.routes['/music'].templateUrl).toEqual('partials/music.html');
    expect($route.routes['/music'].title).toEqual('deep gray sea : music');
    expect($route.routes['/music'].description).toEqual('Musical works from Mikey Micheletti, Seattle-area designer and musician.');
    expect($route.routes['/music'].activeNav).toEqual('music');
    expect($route.routes['/music'].footerEmail).toEqual('Nigerian Princes click here');
  }));

  it('should have correct values for the articles view', inject(function($route) {
    expect($route.routes['/articles'].controller).toEqual('AppCtrl');
    expect($route.routes['/articles'].templateUrl).toEqual('partials/articles.html');
    expect($route.routes['/articles'].title).toEqual('deep gray sea : articles');
    expect($route.routes['/articles'].description).toEqual('Technical and other articles from Mikey Micheletti, Seattle-area designer and musician.');
    expect($route.routes['/articles'].activeNav).toEqual('articles');
    expect($route.routes['/articles'].footerEmail).toEqual('Ooh tell me how I can start a franchise and lay off my boss');
  }));

  it('should have correct values for the contact view', inject(function($route) {
    expect($route.routes['/contact'].controller).toEqual('AppCtrl');
    expect($route.routes['/contact'].templateUrl).toEqual('partials/contact.html');
    expect($route.routes['/contact'].title).toEqual('deep gray sea : contact');
    expect($route.routes['/contact'].description).toEqual('Send a message to Mikey Micheletti, Seattle-area designer and musician.');
    expect($route.routes['/contact'].activeNav).toEqual('contact');
    expect($route.routes['/contact'].footerEmail).toEqual('You are here');
  }));

  it('should have correct values for the 404 page', inject(function($route) {
    expect($route.routes['/404'].controller).toEqual('AppCtrl');
    expect($route.routes['/404'].templateUrl).toEqual('partials/404.html');
    expect($route.routes['/404'].title).toEqual('deep gray sea : you seem lost');
    expect($route.routes['/404'].description).toEqual('Has the little lambykins lost his way?');
    expect($route.routes['/404'].activeNav).toEqual('nothing'); // no nav highlight this page
    expect($route.routes['/404'].footerEmail).toEqual('Sure, tell me about the World\'s First And Only Expanding Hose.');
  }));

  // hints courtesy of this plunker: http://plnkr.co/edit/j1o0iu?p=preview
  it('should redirect to 404 for bogusroutes', inject(function($route, $location, $rootScope, $httpBackend) {
    $httpBackend.expectGET('partials/404.html').respond(200);
    $location.path('/toadpants');
    $rootScope.$digest();
    expect($location.path()).toBe('/404');
    expect($route.current.templateUrl).toEqual('partials/404.html');
  }));

});

describe('Tests for design views in the route provider', function() {

  // Load the app
  beforeEach(module('m2App'));

  it('should have correct values for the MTA design view', inject(function($route) {
    expect($route.routes['/mta'].controller).toEqual('AppCtrl');
    expect($route.routes['/mta'].templateUrl).toEqual('partials/mta.html');
    expect($route.routes['/mta'].title).toEqual('deep gray sea : MOTOTRBO Anywhere');
    expect($route.routes['/mta'].description).toEqual('Mobile and web application design work to integrate broadband clients with TRBO radios.');
    expect($route.routes['/mta'].activeNav).toEqual('design');
    expect($route.routes['/mta'].footerEmail).toEqual('Do tell me how to Eliminate-Wrinkles fOREVER...');
  }));

  it('should have correct values for the Desktop Communicator design view', inject(function($route) {
    expect($route.routes['/desktop'].controller).toEqual('AppCtrl');
    expect($route.routes['/desktop'].templateUrl).toEqual('partials/desktop.html');
    expect($route.routes['/desktop'].title).toEqual('deep gray sea : WAVE Desktop Communicator');
    expect($route.routes['/desktop'].description).toEqual('On the design of this communications dispatch console for radio and broadband audio.');
    expect($route.routes['/desktop'].activeNav).toEqual('design');
    expect($route.routes['/desktop'].footerEmail).toEqual('Yes, do tell me how to drop 27 lbs in just 30 days');
  }));

  it('should have correct values for the Web Communicator design view', inject(function($route) {
    expect($route.routes['/webcomm'].controller).toEqual('AppCtrl');
    expect($route.routes['/webcomm'].templateUrl).toEqual('partials/webcomm.html');
    expect($route.routes['/webcomm'].title).toEqual('deep gray sea : WAVE Web Communicator');
    expect($route.routes['/webcomm'].description).toEqual('On designing this Silverlight client for two-way voice communications.');
    expect($route.routes['/webcomm'].activeNav).toEqual('design');
    expect($route.routes['/webcomm'].footerEmail).toEqual('You never call, you never write. What am I, chopped liver?');
  }));

  it('should have correct values for the Bahai Prayers design view', inject(function($route) {
    expect($route.routes['/bahaiprayers'].controller).toEqual('AppCtrl');
    expect($route.routes['/bahaiprayers'].templateUrl).toEqual('partials/bahaiprayers.html');
    expect($route.routes['/bahaiprayers'].title).toEqual('deep gray sea : Bahai Prayers');
    expect($route.routes['/bahaiprayers'].description).toEqual('On creating and maintaining the bahaiprayers.org website.');
    expect($route.routes['/bahaiprayers'].activeNav).toEqual('design');
    expect($route.routes['/bahaiprayers'].footerEmail).toEqual('Thank you for the kind word.');
  }));

  it('should have correct values for the Android Design design view', inject(function($route) {
    expect($route.routes['/androiddesign'].controller).toEqual('AppCtrl');
    expect($route.routes['/androiddesign'].templateUrl).toEqual('partials/androiddesign.html');
    expect($route.routes['/androiddesign'].title).toEqual('deep gray sea : WAVE Mobile Communicator for Android');
    expect($route.routes['/androiddesign'].description).toEqual('On contributing to the design of the original WAVE Android client.');
    expect($route.routes['/androiddesign'].activeNav).toEqual('design');
    expect($route.routes['/androiddesign'].footerEmail).toEqual('Oh yes yes please tell me about your Truck Closeout Event!');
  }));

  it('should have correct values for the WCX design view', inject(function($route) {
    expect($route.routes['/wcx'].controller).toEqual('AppCtrl');
    expect($route.routes['/wcx'].templateUrl).toEqual('partials/wcx.html');
    expect($route.routes['/wcx'].title).toEqual('deep gray sea : WAVE Connections');
    expect($route.routes['/wcx'].description).toEqual('On designing web and mobile components for WAVE Connections.');
    expect($route.routes['/wcx'].activeNav).toEqual('design');
    expect($route.routes['/wcx'].footerEmail).toEqual('Ooh yes tell me the Ultimate Info About Government Cover-Up!');
  }));

  it('should have correct values for the IHA design view', inject(function($route) {
    expect($route.routes['/iha'].controller).toEqual('AppCtrl');
    expect($route.routes['/iha'].templateUrl).toEqual('partials/iha.html');
    expect($route.routes['/iha'].title).toEqual('deep gray sea : InstantService in-house admin');
    expect($route.routes['/iha'].description).toEqual('On designing and building this simple web configuration app.');
    expect($route.routes['/iha'].activeNav).toEqual('design');
    expect($route.routes['/iha'].footerEmail).toEqual('Tell me MORE about how I can burn FAT quicker without DIET or Exercise!');
  }));

  it('should have correct values for the Expeditors UI Style Guide design view', inject(function($route) {
    expect($route.routes['/uistyleguide'].controller).toEqual('AppCtrl');
    expect($route.routes['/uistyleguide'].templateUrl).toEqual('partials/uistyleguide.html');
    expect($route.routes['/uistyleguide'].title).toEqual('deep gray sea : Expeditors UI Style Guide');
    expect($route.routes['/uistyleguide'].description).toEqual('On designing and maintaining JavaScript components for the Expeditors design team.');
    expect($route.routes['/uistyleguide'].activeNav).toEqual('design');
    expect($route.routes['/uistyleguide'].footerEmail).toEqual('Please do tell me how Top Traders take advantage of Penny Stocks!');
  }));

  it('should have correct values for the UX Artifacts design view', inject(function($route) {
    expect($route.routes['/uxartifacts'].controller).toEqual('AppCtrl');
    expect($route.routes['/uxartifacts'].templateUrl).toEqual('partials/uxartifacts.html');
    expect($route.routes['/uxartifacts'].title).toEqual('deep gray sea : UX Artifacts');
    expect($route.routes['/uxartifacts'].description).toEqual('User Experience sketches and other work products.');
    expect($route.routes['/uxartifacts'].activeNav).toEqual('design');
    expect($route.routes['/uxartifacts'].footerEmail).toEqual('No More YOYO Diets? I\'m onboard, those things are hard to chew...');
  }));

});

describe('Tests for music views in the route provider', function() {

  // Load the app
  beforeEach(module('m2App'));

  it('should have correct values for the deep gray sea band music view', inject(function ($route) {
    expect($route.routes['/deepgraysea'].controller).toEqual('AppCtrl');
    expect($route.routes['/deepgraysea'].templateUrl).toEqual('partials/deepgraysea.html');
    expect($route.routes['/deepgraysea'].title).toEqual('deep gray sea : the band');
    expect($route.routes['/deepgraysea'].description).toEqual('Music from Seattle area musicians deep gray sea.');
    expect($route.routes['/deepgraysea'].activeNav).toEqual('music');
    expect($route.routes['/deepgraysea'].footerEmail).toEqual('Write me a nice note');
  }));

  it('should have correct values for the solo piano music view', inject(function ($route) {
    expect($route.routes['/solopiano'].controller).toEqual('AppCtrl');
    expect($route.routes['/solopiano'].templateUrl).toEqual('partials/solopiano.html');
    expect($route.routes['/solopiano'].title).toEqual('deep gray sea : solo piano');
    expect($route.routes['/solopiano'].description).toEqual('Solo piano pieces from Mikey Micheletti.');
    expect($route.routes['/solopiano'].activeNav).toEqual('music');
    expect($route.routes['/solopiano'].footerEmail).toEqual('Wow! I\'ve been accepted by Who\'s Who! I just need to send them some money...');
  }));

  it('should have correct values for the drug pilots music view', inject(function ($route) {
    expect($route.routes['/drugpilots'].controller).toEqual('AppCtrl');
    expect($route.routes['/drugpilots'].templateUrl).toEqual('partials/drugpilots.html');
    expect($route.routes['/drugpilots'].title).toEqual('deep gray sea : drug pilots');
    expect($route.routes['/drugpilots'].description).toEqual('Interplanetary musicians and smugglers.');
    expect($route.routes['/drugpilots'].activeNav).toEqual('music');
    expect($route.routes['/drugpilots'].footerEmail).toEqual('Hong Kong bankers we love your emails');
  }));
});

describe('Tests for article views in the route provider', function() {

  // Load the app
  beforeEach(module('m2App'));

  // SoundCloud article is a static page

  it('should have correct values for the responsive bahaiprayers.org article view', inject(function ($route) {
    expect($route.routes['/responsivebp'].controller).toEqual('AppCtrl');
    expect($route.routes['/responsivebp'].templateUrl).toEqual('partials/responsivebp.html');
    expect($route.routes['/responsivebp'].title).toEqual('deep gray sea : Responsive design retrofit for bahaiprayers.org');
    expect($route.routes['/responsivebp'].description).toEqual('On reworking styles on bahaiprayers.org for mobile responsiveness.');
    expect($route.routes['/responsivebp'].activeNav).toEqual('articles');
    expect($route.routes['/responsivebp'].footerEmail).toEqual('"Never Lose Anything Again." Sounds good! Tell me more!');
  }));

  it('should have correct values for the 15 mins of fame article view', inject(function ($route) {
    expect($route.routes['/fifteenminutesoffame'].controller).toEqual('AppCtrl');
    expect($route.routes['/fifteenminutesoffame'].templateUrl).toEqual('partials/fifteenminutesoffame.html');
    expect($route.routes['/fifteenminutesoffame'].title).toEqual('deep gray sea : Fifteen minutes of fame');
    expect($route.routes['/fifteenminutesoffame'].description).toEqual('On my brief moment in the national spotlight.');
    expect($route.routes['/fifteenminutesoffame'].activeNav).toEqual('articles');
    expect($route.routes['/fifteenminutesoffame'].footerEmail).toEqual('Ooh yes tell me how to "Get This Pill Before Big Pharma Bans It!"');
  }));

  it('should have correct values for the bb rounded rect article view', inject(function ($route) {
    expect($route.routes['/blackberryrectangles'].controller).toEqual('AppCtrl');
    expect($route.routes['/blackberryrectangles'].templateUrl).toEqual('partials/bbroundedrect.html');
    expect($route.routes['/blackberryrectangles'].title).toEqual('deep gray sea : BlackBerry code for a rounded rectangle with gradient fill');
    expect($route.routes['/blackberryrectangles'].description).toEqual('BlackBerry Java API example using Graphics.drawShadedFilledPath().');
    expect($route.routes['/blackberryrectangles'].activeNav).toEqual('articles');
    expect($route.routes['/blackberryrectangles'].footerEmail).toEqual('Are you the "Swiss Researcher Who Claims He\'s Found The Answer"? (It\'s ok to write even if you\'re somebody else.)');
  }));

  it('should have correct values for the xaml 1 article view', inject(function ($route) {
    expect($route.routes['/illustratorimagesforxaml'].controller).toEqual('AppCtrl');
    expect($route.routes['/illustratorimagesforxaml'].templateUrl).toEqual('partials/xamlimagesinillustrator.html');
    expect($route.routes['/illustratorimagesforxaml'].title).toEqual('deep gray sea : Creating images for XAML in Adobe Illustrator');
    expect($route.routes['/illustratorimagesforxaml'].description).toEqual('Creating XAML user interface source graphics in Illustrator.');
    expect($route.routes['/illustratorimagesforxaml'].activeNav).toEqual('articles');
    expect($route.routes['/illustratorimagesforxaml'].footerEmail).toEqual('Yes, Doctor Oz, tell me how to Shed 20 Pounds by Memorial Day!');
  }));

  it('should have correct values for the xaml 2 article view', inject(function ($route) {
    expect($route.routes['/importingtoxaml'].controller).toEqual('AppCtrl');
    expect($route.routes['/importingtoxaml'].templateUrl).toEqual('partials/xamlimageimport.html');
    expect($route.routes['/importingtoxaml'].title).toEqual('deep gray sea : Importing images into XAML using Expression Blend');
    expect($route.routes['/importingtoxaml'].description).toEqual('Importing Illustrator vector graphics into XAML using Blend.');
    expect($route.routes['/importingtoxaml'].activeNav).toEqual('articles');
    expect($route.routes['/importingtoxaml'].footerEmail).toEqual('Yes, please reveal all about Christie Brinkley\'s Latest Skincare Secrets!');
  }));

  it('should have correct values for the xaml 3 article view', inject(function ($route) {
    expect($route.routes['/xamltemplateswapping'].controller).toEqual('AppCtrl');
    expect($route.routes['/xamltemplateswapping'].templateUrl).toEqual('partials/xamltemplateswitchinstyle.html');
    expect($route.routes['/xamltemplateswapping'].title).toEqual('deep gray sea : Switching images in a XAML style');
    expect($route.routes['/xamltemplateswapping'].description).toEqual('Switching between multiple control state graphics in XAML.');
    expect($route.routes['/xamltemplateswapping'].activeNav).toEqual('articles');
    expect($route.routes['/xamltemplateswapping'].footerEmail).toEqual('Yes! Tell me how to Hit The Tour Draw!');
  }));

  it('should have correct values for the poppy article view', inject(function ($route) {
    expect($route.routes['/rememberingpoppy'].controller).toEqual('AppCtrl');
    expect($route.routes['/rememberingpoppy'].templateUrl).toEqual('partials/rememberingpoppy.html');
    expect($route.routes['/rememberingpoppy'].title).toEqual('deep gray sea : Remembering Poppy');
    expect($route.routes['/rememberingpoppy'].description).toEqual('Remembering Poppy, a fine longtime kitty friend.');
    expect($route.routes['/rememberingpoppy'].activeNav).toEqual('articles');
    expect($route.routes['/rememberingpoppy'].footerEmail).toEqual('Please do write to tell me my mailbox is almost full.');
  }));

  it('should have correct values for the treehouse article view', inject(function ($route) {
    expect($route.routes['/treehouse'].controller).toEqual('AppCtrl');
    expect($route.routes['/treehouse'].templateUrl).toEqual('partials/treehouse.html');
    expect($route.routes['/treehouse'].title).toEqual('deep gray sea : Treehouse');
    expect($route.routes['/treehouse'].description).toEqual('Cool family photo of a dog on the ground and a boy in a treehouse.');
    expect($route.routes['/treehouse'].activeNav).toEqual('articles');
    expect($route.routes['/treehouse'].footerEmail).toEqual('I\'m not sure I really need all 16000 Woodworking Plans, but sure, write me.');
  }));

  it('should have correct values for the plant a tree article view', inject(function ($route) {
    expect($route.routes['/plantatree'].controller).toEqual('AppCtrl');
    expect($route.routes['/plantatree'].templateUrl).toEqual('partials/plantatree.html');
    expect($route.routes['/plantatree'].title).toEqual('deep gray sea : Plant a tree');
    expect($route.routes['/plantatree'].description).toEqual('Step-by-step planting a bare-root fruit tree.');
    expect($route.routes['/plantatree'].activeNav).toEqual('articles');
    expect($route.routes['/plantatree'].footerEmail).toEqual('Yes! Tell me how to Unlock The Potential Of My Subconscious Mind Right Now!');
  }));

});
