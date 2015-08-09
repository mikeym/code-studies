// FizzBuzz in JavaScript Jasmine tests.

describe('FizzBuzz tests', function() {
  var fizzBuzzFromOneToTwenty = '1, 2, Fizz, 4, Buzz, ' +
                                'Fizz, 7, 8, Fizz, Buzz, ' +
                                '11, Fizz, 13, 14, FizzBuzz, ' +
                                '16, 17, Fizz, 19, Buzz';

  it('should fizzbuzz fine from one to twenty using the first implementation', function() {
    var returnVal = fizzBuzz(1, 20);
    expect(returnVal).toEqual(fizzBuzzFromOneToTwenty);
  });
  
  it('should fizzbuzz fine from one to twenty using the second implementation', function() {
    var returnVal = fizzBuzz2(1, 20);
    expect(returnVal).toEqual(fizzBuzzFromOneToTwenty);
  });
  
  it('should fizzbuzz fine from one to twenty using the third implementation', function() {
    var returnVal = fizzBuzz3(1, 20);
    expect(returnVal).toEqual(fizzBuzzFromOneToTwenty);
  });
});