// Unit tests for the little progress bar
describe('Tests for the track-progress-bar directive', function() {
  var $rootScope,
      body = angular.element(document.createElement('div')),
      html =
          '<div style="width: 100px;">' +
          '  <track-progress-bar cur-val="{{playPosition}}" max-val="{{playDuration}}">' +
          '</div>',
      $directive,
      $compile;

  beforeEach(module('m2App'));

  // compile the directive before each run
  beforeEach(inject(function (_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $rootScope.playPosition = 0;
    $rootScope.playDuration = 50;
    $directive = $compile(angular.element(html))($rootScope);
    body.append($directive);
    $rootScope.$digest();
  }));

  // clean up after each test
  afterEach(function() {
    body.empty($directive);
  });

  // test to make sure we have correct initial values bound to the directive
  it('should bind the correct initial values to the directive', function() {
    var elem = angular.element($directive.find('track-progress-bar'))[0];

    expect($rootScope.playPosition).toEqual(0);
    expect($rootScope.playDuration).toEqual(50);

    $compile(elem)($rootScope);
    $rootScope.$digest();

    // test for initial values async
    setTimeout(function() {
      expect(elem.attr('cur-val')).toEqual(0);
      expect(elem.attr('max-val')).toEqual(50);
    }, 2000);
  });

  // create an interval loop and check to make sure our directive binds at each step
  it('should bind the correct values to the directive as the value changes', inject(function(_$interval_) {
    var $interval = _$interval_,
        elem = angular.element($directive.find('track-progress-bar'))[0],
        stop;
    expect($rootScope.playPosition).toEqual(0);
    expect($rootScope.playDuration).toEqual(50);

    $compile(elem)($rootScope);
    $rootScope.$digest();

    stop = $interval(function() {
      if ($rootScope.playPosition < $rootScope.playDuration) {
        $rootScope.playPosition += 1;
        $rootScope.$apply();
        expect(elem).attr('cur-val').toEqual($rootScope.playPosition);
        expect(elem).attr('max-val').toEqual($rootScope.playDuration);
      } else {
        expect(elem).attr('cur-val').toEqual($rootScope.playPosition);
        expect(elem).attr('cur-val').toEqual($rootScope.playDuration);
        expect(elem).attr('max-val').toEqual($rootScope.playDuration);
        $interval.cancel(stop);
      }
    });
  }));

  // the real thing the directive does is to affect the width of the inner marker div
  // check here to make sure it starts out with a 0px width
  it('should initialize the width of the inner marker to 0px', function() {
    var elem = angular.element($directive.find('track-progress-bar'))[0],
        marker;

    $compile(elem)($rootScope);
    $rootScope.$digest();

    marker = angular.element(elem.querySelector('.progress-bar-marker'));
    expect(marker.css('width')).toEqual('0px');
  });

  // dummy up another loop to test that the inner marker div width is being modified as expected
  it('should adjust the width of the inner marker as the value changes', inject(function(_$interval_) {
    var $interval = _$interval_,
        elem = angular.element($directive.find('track-progress-bar'))[0],
        marker,
        stop;

    $compile(elem)($rootScope);
    $rootScope.$digest();

    marker = angular.element(elem.querySelector('.progress-bar-marker'));

    stop = $interval(function() {
      if ($rootScope.playPosition < $rootScope.playDuration) {
        $rootScope.playPosition += 1;
        $rootScope.$apply();
        expect(marker).css('width').toEqual($rootScope.playPosition + 'px');
      } else {
        expect(marker).css('width').toEqual($rootScope.playDuration + 'px');
        $interval.cancel(stop);
      }
    });
  }));

});
