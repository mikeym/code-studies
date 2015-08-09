// Jasmine tests for the singly-linked list structures.

describe('Linked List data structure tests', function() {
  
  describe('empty Linked List tests', function() {
    
    it('- should have a length of zero in an empty list', function() {
      var list = new LinkedList();
      expect(list.length).toEqual(0);    
    })
  });
  
  describe('Linked List tests with data', function() {
    var list;
    
    beforeEach(function() {
      list = new LinkedList();  
      list.add('shark');
      list.add('eel');
      list.add('whale');
    });
    
    afterEach(function() {
      list = null;
    });
    
    it('- should be able to add an item to the linked list', function() {
      expect(list.length).toEqual(3);
    });
    
    it('- should be able to retrieve an item by index from the linked list', function() {
      // zero-based items
      expect(list.item(0)).toEqual('shark');
      expect(list.item(1)).toEqual('eel');
      expect(list.item(2)).toEqual('whale');
    });
    
    it('- should return null when you try to retrieve an item out of bounds from the linked list', function() {
      expect(list.item(47)).toBeNull();
    });
    
    it('- should remove an item from the linked list and return its value', function() {
      expect(list.remove(1)).toEqual('eel');
      expect(list.length).toEqual(2);
    });
    
    it('- should return null and not remove anything if you try to remove an item out of bounds', function() {
      expect(list.remove(83)).toBeNull();
      expect(list.length).toEqual(3);
    });
    
    it('- should return the correct index when searching for an item in the list', function() {
      expect(list.find('eel')).toEqual(1);    
      expect(list.find('whale')).toEqual(2);
    });
    
    it('- should return -1 if you try to find an item not in the list', function() {
      expect(list.find('turtle')).toEqual(-1);    
    });
    
    it('- should be able to find an item then remove it from the list', function() {
      expect(list.remove(list.find('eel'))).toEqual('eel');
    });
    
    it('- should be able to traverse the list', function() {
      expect(list.head.next.next.data).toEqual('whale')
    });
    
    it('- should be able to reverse the list', function() {
      list.reverse();
      expect(list.item(0)).toEqual('whale');
      expect(list.item(1)).toEqual('eel');
      expect(list.item(2)).toEqual('shark');
    })
        
  });

});