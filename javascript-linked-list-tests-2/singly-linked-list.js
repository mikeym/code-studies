// Working on a simple implementation of a linked list in JavaScript.
// This is part of an ongoing JavaScript data structures/interview questions jag.
// From a good article by Nicholas Zakas http://www.nczonline.net/blog/2009/04/13/computer-science-in-javascript-linked-list/

// LinkedList has a head and a length. Nodes added as we go
function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype = {
  
  // add a node to the list with a specified value
  add: function(val) {
    var node = {
          data: val,
          next: null
        },
        current;
    
    // special case for no items in the list
    if (this.head === null) {
      this.head = node;
    } else {
      
      // current.next will be null when we get to the end of the list
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      // update next pointer, update list count
      current.next = node;
    }
    this.length++;
  },
  
  // retrieve data from the nth item in the list
  item: function(index) {
    var current,
        i;
    
    // check for out of bounds
    if (index > -1 && index < this.length) {
      current = this.head;
      i = 0;
      while (i++ < index) {
        current = current.next;
      }
      return current.data;
    } else {
      return null;
    }
  },

  // remove the nth item in the list. 
  // returns removed data if successful, or null if not removed
  remove: function(index) {
    var current,
        previous,
        i;
        
    // check for out of bounds
    if (index > -1 && index < this.length) {
      current = this.head;
      i = 0;
      // special case, removing first item
      if (index === 0) {
        this.head = current.next;
      } else {
        // find the right location
        while(i++ < index) {
          previous = current;
          current = current.next;
        }
        // once found, skip an item to remove it
        previous.next = current.next;
      }
      
      // decrement the length
      this.length--;
      return current.data;
    } else {
      return null;
    }
  },
  
  // returns the index of an item with matching data value in the list or -1 if not found
  find: function(val) {
    var current = this.head,
        i = 0;
    
    // we could probs do this with item, but would get multiple loops
    while(i < this.length) {
      if(current.data === val) {
        return i;
      }
      i++;
      current = current.next;
    }
    return -1;
  },
  
  // reverse the items in the list in place
  reverse: function() {
    var aux,
        prev = null;
    
    while(this.head) {
      aux = this.head.next;
      this.head.next = prev;
      prev = this.head;
      this.head = aux;
    }
    this.head = prev;
  }
  
};

