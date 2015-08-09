// Jasmine tests for JavaScript binary tree

describe('should be able to perform binary tree operations', function() {
  var tree;
  
  // These tests use shift-based node operation methods as in the I Programmer example
  describe('should operate correctly using the shift-based methods', function() {
  
    beforeEach(function() {
      tree = new BinaryTree();
  
      // setNode(value, level, node)
      tree.setNode(1, 0, 0);  // level 0
      tree.setNode(2, 1, 0);  // level 1
      tree.setNode(3, 1, 1);
      tree.setNode(4, 2, 0);  // level 2
      tree.setNode(5, 2, 1);
      tree.setNode(6, 2, 2);
      tree.setNode(7, 2, 3);
    });
    
    afterEach(function() {
      tree = null;
    });
    
    it('should be able to set and get nodes using the shift-based SMF methods', function() {
      // getNode(level, node)
      expect(tree.getNode(1, 1)).toEqual(3);
      expect(tree.getNode(2, 2)).toEqual(6);
    });
    
    it('should be able to get and set node values based on the current level and node', function() {
      // test the alternate paths in get and set when level is omitted
      tree.level = 2;
      tree.node = 1;
      expect(tree.getNode()).toEqual(5);    // uses current level & node
      expect(tree.getNode(2,1)).toEqual(5); // uses specified level & node
      expect(tree.getNode(2,0)).toEqual(4); // make sure the neighbors are fine
      expect(tree.getNode(2,2)).toEqual(6);
      
      // set value of current node without specifying level or node
      tree.setNode(73);
      expect(tree.getNode()).toEqual(73);     // current value
      expect(tree.getNode(2,1)).toEqual(73);  // specify level & node
      expect(tree.getNode(2,0)).toEqual(4); // make sure the neighbors are fine
      expect(tree.getNode(2,2)).toEqual(6);
    });

    it('should be able to do root node stuff using the shift-based SMF method', function() {
      expect(tree.root()).toEqual(1);
      expect(tree.root(100)).toEqual(100);
      tree.root(50);
      expect(tree.getNode(0,0)).toEqual(50);
    });

    it('should be able to perform operations on the left child of a node', function() {
      // set current node to the root node
      tree.root();
      expect(tree.leftChild()).toEqual(2);
      expect(tree.getNode(1,0)).toEqual(2);
      expect(tree.level).toEqual(1);
      expect(tree.node).toEqual(0);
  
      tree.root();
      tree.leftChild(99);
      expect(tree.getNode(1,0)).toEqual(99);
      expect(tree.level).toEqual(1);
      expect(tree.node).toEqual(0);
    });
    
    it('should be able to perform operations on the right child of a node', function() {
      // set current node to the root node
      tree.root();
      expect(tree.rightChild()).toEqual(3);
      expect(tree.getNode(1,1)).toEqual(3);
      expect(tree.level).toEqual(1);
      expect(tree.node).toEqual(1);
  
      tree.root();
      tree.rightChild(99);
      expect(tree.getNode(1,1)).toEqual(99);
      expect(tree.level).toEqual(1);
      expect(tree.node).toEqual(1);
    });
    
    it('should be able to perform simple traversal sequences', function() {
      // test simple traversal
      var testedValue = tree.root();  // root node
      expect(tree.level).toEqual(0);
      expect(tree.node).toEqual(0);
      expect(testedValue).toEqual(1);
      
      testedValue = tree.leftChild(); // left child of root node
      expect(tree.level).toEqual(1);
      expect(tree.node).toEqual(0);
      expect(testedValue).toEqual(2);
      
      testedValue = tree.rightChild(); // right child of the above node
      expect(tree.level).toEqual(2);
      expect(tree.node).toEqual(1);
      expect(testedValue).toEqual(5);
      
      testedValue = tree.parent();
      expect(tree.level).toEqual(1);
      expect(tree.node).toEqual(0);
      expect(testedValue).toEqual(2);
    });
    
    it('should be able to traverse the tree', function() {
      var traverseValue;
      tree.root();
      traverseValue = tree.traverse();
      
      // values come in odd orders because of traversal, check to make sure all are there
      expect(traverseValue).toContain(1);
      expect(traverseValue).toContain(2);
      expect(traverseValue).toContain(3);
      expect(traverseValue).toContain(4);
      expect(traverseValue).toContain(5);
      expect(traverseValue).toContain(6);
      expect(traverseValue).toContain(7);
      expect(traverseValue.length).toEqual(7);
    });
    
  }); // shift-based tests

  // These tests use the Math.pow variants to get and set nodes
  // I didn't do every possible op this way, was just curious
  describe('should operate correctly using Math.pow-based methods', function() {
    beforeEach(function() {
      tree = new BinaryTree();
      
      // setNodePow(value, level, node)
      tree.setNodePow(1, 0, 0);
      tree.setNodePow(2, 1, 0);
      tree.setNodePow(3, 1, 1);
      tree.setNodePow(4, 2, 0);
      tree.setNodePow(5, 2, 1);
      tree.setNodePow(6, 2, 2);
      tree.setNodePow(7, 2, 3);
    });
    
    afterEach(function() {
      tree = null;
    });
    
    it('should be able to set and get nodes using the Math.pow methods', function() {
      // getNodePow(level, node)
      expect(tree.getNodePow(1, 1)).toEqual(3);
      expect(tree.getNodePow(2, 2)).toEqual(6);
    });
    
    it('should be able to do root node stuff using the Math.pow SMF method', function() {
      expect(tree.rootPow()).toEqual(1);
      expect(tree.rootPow(100)).toEqual(100);
      tree.rootPow(50);
      expect(tree.getNodePow(0,0)).toEqual(50);
    });
  });

});