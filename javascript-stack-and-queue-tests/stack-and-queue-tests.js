// Stack and Queue structures in JavaScript
// Exploring interview-related data structures using Jasmine, as usual

describe('exploring Stack and Queue data structures in JavaScript', function() {
  
  // A stack data structure places items into a collection, and then removes the most
  // recently placed item first (a "LIFO" structure). 
  describe('using Array.push() and Array.pop() to create a stack', function() {
    
    var myStack = [ ]; // yes I'm really an array ha ha I trick you
    
    it('should be able to push items onto the stack and then pop them off', function() {
      
      expect(myStack.length).toEqual(0);
      
      // push adds items to the stack
      myStack.push('toad');
      myStack.push('beans');
      myStack.push('lizard');
      expect(myStack.length).toEqual(3);
      
      // note the array adds items in order at the end when you push them
      expect(myStack[0]).toEqual('toad');
      expect(myStack[1]).toEqual('beans');
      expect(myStack[2]).toEqual('lizard');
      
      // pop takes items from the stack, most recent item first
      expect(myStack.pop()).toEqual('lizard');
      expect(myStack.pop()).toEqual('beans');
      expect(myStack.pop()).toEqual('toad');
      
      // items are removed from the array by pop, should be empty now
      expect(myStack.length).toEqual(0);
    });
  });
  
  // A queue data structure places items into a collection, and then removes the
  // oldest item first (a "FIFO" structure).
  describe('using Array.push() and Array.shift() to create a queue', function() {
    
    var myQueue = [ ]; // yes I'm an array again, you keep falling for this one
    
    it('should be able to place items into the queue and then dequeue them', function() {
      
      expect(myQueue.length).toEqual(0);
      
      // push adds items to the queue
      myQueue.push('elbow');
      myQueue.push('foot');
      myQueue.push('butt');
      expect(myQueue.length).toEqual(3);
      
      // shift removes the eldest items first
      expect(myQueue.shift()).toEqual('elbow');
      expect(myQueue.shift()).toEqual('foot');
      expect(myQueue.shift()).toEqual('butt'); // at the end, get it. oh, um, sorry.
      
      // queue is empty now
      expect(myQueue.length).toEqual(0);
    });
  });
});