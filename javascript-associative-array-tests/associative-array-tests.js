// JavaScript Associative Arrays
// Little experiments prompted by an I Programmer article:
// http://www.i-programmer.info/programming/javascript/1441-javascript-data-structures-the-associative-array.html

describe('associative array experiments', function() {

  describe('exploring associative arrays with key/value pairs', function() {
    var myArray;
    
    beforeEach(function() {
      // define a simple associative array with keys and values
      myArray = {
        keyW: 'Frogs',
        keyX: 'Toads',
        keyY: 'Newts',
        keyZ: 'Lizards'
      }
    });
    
    afterEach(function() {
      myArray = null;
    });
    
    it('should get and set associative array elements using object notation: myArray.keyX', function() {
      // object notation should work
      expect(myArray.keyW).toEqual('Frogs');
      
      myArray.keyK = 'Prunes';
      expect(myArray.keyK).toEqual('Prunes');
    });
    
    it('should get and set associative array elements using string keys in array notation: myArray["keyX"]', function() {
      // array notation with key as a string should work
      expect(myArray['keyX']).toEqual('Toads');
      
      myArray['keyF'] = "Fritos Corn Chips";
      expect(myArray['keyF']).toEqual('Fritos Corn Chips');
    });
  
    it('should croak when you try to get and set associative array elements with non-stringified notation: myArray[keyX]', function() {
      var notThisWay;
      try {
        notThisWay = myArray[keyY]; // nyet
      } catch(explosion) { }
      
      expect(notThisWay).toBeUndefined();
      
      try {
        myArray[keyP] = 'kaboom'; // should fail
      } catch (boom) { }
      
      expect(myArray.keyP).toBeUndefined();
      expect(myArray['keyP']).toBeUndefined();
      
      try {
        notThisWay = myArray[keyP];
      } catch (kablooie) { }
      expect(notThisWay).toBeUndefined();
    });
    
    it('should be sad when you attempt to access associative array elements using index notation: myArray[2]', function() {
      var nope;
      
      try {
        nope = myArray[1];
      } catch (blurp) { }
      expect(nope).toBeUndefined();
    });
    
  });
  
  describe('exploring associative arrays that store functions', function() {
    var myArray;
    
    beforeEach(function() {
      myArray = {
        keyX: function() { return 'whale farts'; },
        keyY: function() { return 'pickle whiskey'; },
        keyZ: function() { return 'republican presidential candidate'; }
      };
    });
    
    afterEach(function() {
      myArray = null;
    });
    
    it('should fess up that we have functions stored in our associative array', function() {
      expect(typeof(myArray.keyX)).toEqual('function');
      expect(typeof(myArray.keyY)).toEqual('function');
      expect(typeof(myArray.keyZ)).toEqual('function');
    });
    
    it('should be able to evaluate (execute) the functions stored in our associative array', function() {
      var xReturn,
          yReturn,
          zReturn;
          
      xReturn = myArray.keyX();     // object notation
      yReturn = myArray.keyY();
      zReturn = myArray['keyZ']();  // stringified array notation works too
      
      expect(xReturn).toEqual('whale farts');
      expect(yReturn).toEqual('pickle whiskey');
      expect(zReturn).toEqual('republican presidential candidate');
    });
  });
  
  describe('exploring associative arrays indexed by integers like evil Bond villains might do', function() {
    var myArray;
    
    beforeEach(function() {
      myArray = {
        1: 'prunes',
        2: 'durians',
        3: 'okra',
        4: 'beets'
      }
    });
    
    afterEach(function() {
      myArray = null;
    });
    
    it('should be able to access associative array elements with integer keys using array notation', function() {
      expect(myArray[1]).toEqual('prunes');
      expect(myArray[3]).toEqual('okra');
      expect(myArray[0]).toBeUndefined(); // we didn't make this one
    });
    
    it('should be able to access associative array elements with integer keys using stringified array notation', function() {
      expect(myArray['1']).toEqual('prunes');
      expect(myArray['4']).toEqual('beets');
      expect(myArray['0']).toBeUndefined(); // didn't do this one
    });
    
    it('should croak if you try to access associative array elements with integer keys using object notation', function() {
      var nope;
      
      try {
        // sorry, this next seems to break Jasmine, even in a try/catch block
        // but basically this won't work.
        //nope = myArray.1; 
      } catch (blurp) { }
      expect(nope).toBeUndefined();
    });
  
  });
  
});


