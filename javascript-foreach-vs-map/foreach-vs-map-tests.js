// Exploring the differences between Array.forEach() and Array.map() in JavaScript.

describe('exploring Array.forEach() vs Array.map()', function() {
  var myArray;
  
  beforeEach(function() {
    myArray = [ {val: 1}, {val: 2}, {val: 3} ];
  });
  
  afterEach(function() {
    myArray = null;
  });
  
  it('- should return undefined when you use forEach', function() {
    var ret = myArray.forEach(function(el) { });
    expect(ret).toBeUndefined();
  });
  
  it('- should return an empty array with as many items as the source array when you use map', function() {
    var ret = myArray.map(function(el) { });
    expect(ret).not.toBeUndefined();
    expect(typeof(ret)).toEqual('object');
    expect(ret.length).toEqual(3);
    expect(ret[0]).toBeUndefined();
    expect(ret[1]).toBeUndefined();
    expect(ret[2]).toBeUndefined();
  });
  
  it('- should be able to change values in the array when you use forEach', function() {
    var ret = myArray.forEach(function(el) {
      el.val = el.val * 2;
    });
    expect(myArray[0].val).toEqual(2);
    expect(myArray[1].val).toEqual(4);
    expect(myArray[2].val).toEqual(6);
  });

  it('- should be able to change values in the array when you use map', function() {
    var ret = myArray.map(function(el) {
      el.val = el.val * 2;
    });
    expect(myArray[0].val).toEqual(2);
    expect(myArray[1].val).toEqual(4);
    expect(myArray[2].val).toEqual(6);
  });  
  
  it('- should be able to return a new, different, array without changing the original when you use map', function() {
    var ret = myArray.map(function(el) {
      return { val: el.val * 2 };
    });
    expect(myArray[0].val).toEqual(1);
    expect(myArray[1].val).toEqual(2);
    expect(myArray[2].val).toEqual(3);
    expect(ret[0].val).toEqual(2);
    expect(ret[1].val).toEqual(4);
    expect(ret[2].val).toEqual(6);
  });  
  
  it('- should be able to return a new, different, array without changing the original when you use forEach, but you have to do all the work', function() {
    var ret = [ ];
    myArray.forEach(function(el) {
      ret.push( { val: el.val * 2 } );
    });
    expect(myArray[0].val).toEqual(1);
    expect(myArray[1].val).toEqual(2);
    expect(myArray[2].val).toEqual(3);
    expect(ret[0].val).toEqual(2);
    expect(ret[1].val).toEqual(4);
    expect(ret[2].val).toEqual(6);
  });  
});