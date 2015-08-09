// Binary tree data structure example courtesy I Programmer
// http://www.i-programmer.info/programming/javascript/1899-javascript-data-structures-the-binary-tree.html

// A binary tree is a tree structure where each node (except for the terminal nodes)
// has exactly two children. You can specify an element on the tree with two
// indices: the level (how far down) and the node number (how far to the right).

// This example uses a storage mapping function to increase search performance.
// I'm given to understand it only works for trees with a fixed branching factor
// and no missing nodes.

// example:                   0
//                          /   \
//                        0       1
//                      /   \   /   \
//                    0     1   2     3
//

// Storage location    0   1   2   3   4   5   6
// level               0 | 1     | 2
// node                0 | 0   1 | 0   1   2   3

function BinaryTree() {

  // for node-based navigation
  this.level = 0; // current level we're on
  this.node = 0;  // current node we're on

  // shift-based formula works only on a binary tree.
  // 1<<k is 2^k
  // so location = node + 2^level - 1
  // "binary tree Storage Management Function"
  this.btSMF = function(level, node) {
    return node + (1<<level) - 1;
  }
  
  // I think this is the easier-to-grok equivalent with Math.pow...
  this.btSMFPow = function(level, node) {
    return node + Math.pow(2, level) - 1;
  }
  
  // where we keep 'em
  this.Nodes = new Array();
  
  // get a node using the bit-shift
  // if level isn't supplied, return value of the current node
  this.getNode = function(level, node) {
    if (level === undefined) {
      return this.Nodes[this.btSMF(this.level, this.node)];
    } else {
      return this.Nodes[this.btSMF(level, node)];
    }
  }
  
  // set a node using the bit-shift
  // if level argument is supplied use it, otherwise use current location level
  this.setNode = function(value, level, node) {
    if (level === undefined) {
      this.Nodes[this.btSMF(this.level, this.node)] = value;  
    } else {
      this.Nodes[this.btSMF(level, node)] = value;  
    }
  }
  
  // get a node using the Math.pow alternative
  // didn't implement node position effects in this version
  this.getNodePow = function(level, node) {
    return this.Nodes[this.btSMF(level, node)];    
  }
  
  // set a node using the Math.pow alternative
  // didn't implement node position effects in this version
  this.setNodePow = function(value, level, node) {
    this.Nodes[this.btSMFPow(level, node)] = value;
  }
  
  // set the current position to the root: tree.root()
  // set the value at the root: tree.root(100)
  // get the value at the root: rootvalue = tree.root()
  // this one uses the bitshifted SMF
  this.root = function(value) {
    this.level = 0;
    this.node = 0;
    // if a value was supplied, set it
    if (value !== undefined) {
      this.Nodes[this.btSMF(this.level, this.node)] = value; // level 0, node 0
    }
    // return the root node value
    return this.Nodes[this.btSMF(this.level, this.node)];
  }
  
  // alternate version of root using Math.pow, just to double-check
  this.rootPow = function(value) {
    this.level = 0;
    this.node = 0;
    if (value !== undefined) {
      this.Nodes[this.btSMFPow(this.level, this.node)] = value;
    }
    return this.Nodes[this.btSMFPow(this.level, this.node)];
  }
  
  // get the left child of a parent: tree.leftChild()
  // set the left child of a parent: tree.leftChild(6);
  this.leftChild = function(value) {
    this.level++;
    this.node = this.node * 2; // see diagram above
    if (value !== undefined) {
      this.Nodes[this.btSMF(this.level, this.node)] = value;
    }
    return this.Nodes[this.btSMF(this.level, this.node)];
  }
  
  // same but for right child
  this.rightChild = function(value) {
    this.level++;
    this.node = this.node * 2 + 1; // see diagram above
    if (value !== undefined) {
      this.Nodes[this.btSMF(this.level, this.node)] = value;
    }
    return this.Nodes[this.btSMF(this.level, this.node)];
  }
  
  // get the parent of the current node
  this.parent = function(value) {
    this.level--;
    this.node = this.node >> 1; // alternatively, Math.floor(this.node / 2) prolly
    if (value !== undefined) {
      this.Nodes[this.btSMF(this.level, this.node)] = value;
    }
    return this.Nodes[this.btSMF(this.level, this.node)];
  }
  
  // recursively traverse the tree in an inner function
  this.traverse = function() {
    var that = this,          // reference to the tree
        stack = new Array();  // store traversal results
    
    // recursive inner function that immediately executes from current node position
    (innerTraverse = function() {
      
      // push current node value onto the stack
      stack.push(that.getNode());
      
      // if it has a left child, go there and traverse, then come back
      if (that.leftChild() !== undefined) {
        innerTraverse();
      }
      that.parent();
      
      // if it has a right child, go there and traverse, then come back
      if (that.rightChild() !== undefined) {
        innerTraverse();
      }
      that.parent();
    })();
    
    // done recursing, return our array
    return stack;
  }
  
}
