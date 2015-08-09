// Linked List in JavaScript
// From http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html

function List() {
  this.start = null;
  this.end = null;
  
  // create a list node object
  // it will have some data and a reference to the next node
  this.makeNode = function() {
    return {data: null, next: null};
  };
  
  // add a node to the end of the list, it expects some data
  this.add=function (data) {
    
    // if the list is null, this node is both the alpha and the omega
    if(this.start === null){
      this.start = this.makeNode();
      this.end = this.start;
      
    // otherwise this node goes at the end of the list
    } else {
      this.end.next = this.makeNode();
      this.end = this.end.next;
    }
    
    // either way, don't forget to add the crunchy data bits
    this.end.data = data;
  };
 
  // delete a node by its data.
  // we simply remove a reference to the node and let garbage collection deal with it.
  this.delete = function(data) {
    var current = this.start,
        previous = this.start;
    
    // check each item until we find the one we want   
    while (current !== null) {
      // gotcha!
      if (data === current.data) {
        // if item is at the start of the list, change start to point to the next item
        if (current === this.start) {
          this.start = current.next;
          return;
        // if item is at the end of the list, change end to point to previous item
        } else if (current === this.end) {
          this.end = previous;  
        }
        // in the middle of the list, just bypass the current node's link
        previous.next = current.next
        return;
      }
      // advance...
      previous = current;
      current = current.next;
    }
  };
  
  // insert a new item ('dataToInsert') after some given item ('dataToFind')
  this.insertAfter = function(dataToFind, dataToInsert) {
    var current = this.start,
        temp;
    
    // check each item until we find the one we want
    while (current !== null) {
      // found it, insert the new data and fix all the links
      if (current.data === dataToFind) {
        // make a new node and set up its next link
        temp = this.makeNode();
        temp.data = dataToInsert;
        temp.next = current.next;
        if (current === this.end) {
          this.end = temp;
        }
        // the current node points to the new node we just made, done
        current.next = temp;
        return;
      }
      // keep looking...
      current = current.next;
    }
  };
  
  // retrieve a node using an index
  // note the first item in the list is 1 (one-based)
  this.item = function(i) {
    var current = this.start;
    while (current !== null) {
      // we count backwards to zero...
      i--;
      if (i === 0) {
        return current;
      }
      // ...by counting forwards from zero, head asplodes
      current = current.next;
    }
    // nyet aint gots that one
    return null;
  };
  
  // iterate over each item in the list, applying a function to each item
  // functional programming adventure
  this.each = function(f) {
    var current = this.start;
    while(current !== null) {
      f(current);
      current = current.next;
    }
  };
  
};




