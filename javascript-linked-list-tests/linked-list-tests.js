// Jasmine tests for JavaScript Linked List

describe(' basic tests for the JavaScript linked list', function() {
  var list = null;
  
  beforeEach(function() {
    list = new List();
  });
  
  it('should start out with an empty list', function() {
    expect(list.start).toBeNull();
    expect(list.end).toBeNull();
  });
  
  it('should be able to add a single item to the list', function() {
    list.add('blurp');
    expect(list.start).not.toBeNull();
    expect(list.end).not.toBeNull();
    expect(list.start.data).toEqual('blurp');
    expect(list.end.data).toEqual('blurp');
  });

  it('should have a null next item at the start of the list after adding a single item', function() {
    list.add('blarp');
    expect(list.start.data).toEqual('blarp');
    expect(list.end.data).toEqual('blarp');
    expect(list.start.next).toBeNull();
    expect(list.end.next).toBeNull();
  });
  
  it('should have a null next item at the end of the list after adding a single item', function() {
    list.add('blorp');
    expect(list.start.data).toEqual('blorp');
    expect(list.end.data).toEqual('blorp');
    expect(list.end.next).toBeNull();
  });
  
  it('should be able to add multiple items to the list', function() {
    list.add('blurp');
    list.add('blarp');
    list.add('blorp');
    expect(list.start).not.toBeNull();
    expect(list.end).not.toBeNull();
    expect(list.start.data).toEqual('blurp');
    expect(list.end.data).toEqual('blorp');
  });
  
  it('should has a null next item at the end of the list after adding multiple items', function() {
    list.add('blurp');
    list.add('blarp');
    list.add('blorp');
    expect(list.end.data).toEqual('blorp');
    expect(list.end.next).toBeNull();
  });
  
  it('should have a first item that points to the second item when you add multiple items', function() {
    list.add('blurp');
    list.add('blarp'); // 2nd item we're testing for
    list.add('blorp');
    expect(list.start.next).not.toBeNull();
    expect(list.start.next.data).toEqual('blarp');
  });

  it('should have a next-to-last item that points to the last item when you add multiple items', function() {
    list.add('blurp');
    list.add('blarp');
    list.add('blorp'); // 3rd item we're testing for
    expect(list.start.next).not.toBeNull();
    expect(list.start.next.next.data).toEqual('blorp'); // no direct accessor so next next next...
  });
});

describe('delete tests for the JavaScript linked list', function() {
  var list = null;
  
  beforeEach(function() {
    list = new List();
    list.add('ONE');
    list.add('TWO');
    list.add('THREE');
  });

  it('should be able to delete an item in the middle of the list', function() {
    list.delete('TWO'); // delete 2nd item
    expect(list.start.next).not.toBeNull();
    expect(list.start.data).toEqual('ONE');
    expect(list.start.next.data).toEqual('THREE'); // first item goes right to the third now
    expect(list.end.data).toEqual('THREE');
  });

  it('should be able to delete an item at the start of the list', function() {
    list.delete('ONE'); // delete 1st item
    expect(list.start.next).not.toBeNull();
    expect(list.start.data).toEqual('TWO'); // starts with 2 now
    expect(list.start.next.data).toEqual('THREE'); 
    expect(list.end.data).toEqual('THREE');
  });
  
  it('should be able to delete an item at the end of the list', function() {
    list.delete('THREE'); // delete 3rd item
    expect(list.start.next).not.toBeNull();
    expect(list.start.data).toEqual('ONE'); 
    expect(list.start.next.data).toEqual('TWO'); 
    expect(list.end.data).toEqual('TWO');
  });
  
  it('should not delete anything if we give it something bogus', function() {
    list.delete('TOAD PANTS'); // ain't gots none
    expect(list.start.next).not.toBeNull();
    expect(list.start.data).toEqual('ONE'); // everything still there
    expect(list.start.next.data).toEqual('TWO'); 
    expect(list.start.next.next.data).toEqual('THREE');
    expect(list.end.data).toEqual('THREE');
  });
});

describe('insert after tests for the JavaScript linked list', function() {
  var list = null;
  
  beforeEach(function() {
    list = new List();
    list.add('ONE');
    list.add('TWO');
    list.add('THREE');
  });

  it('should insert a new item after the first item in the list', function() {
    list.insertAfter('ONE', 'FROG BUTT');
    expect(list.start.next.data).toEqual('FROG BUTT');
    expect(list.start.next.next.data).toEqual('TWO');
  });

  it('should insert a new item after the last item in the list', function() {
    list.insertAfter('THREE', 'UGLY WIG');
    expect(list.end.data).toEqual('UGLY WIG');
    expect(list.start.data).toEqual('ONE'); // let's go ahead and skim through this time
    expect(list.start.next.data).toEqual('TWO');
    expect(list.start.next.next.data).toEqual('THREE');
    expect(list.start.next.next.next.data).toEqual('UGLY WIG');
  });

  it('should insert a new item in the middle of the list', function() {
    list.insertAfter('TWO', 'JORTS');
    expect(list.start.next.next.data).toEqual('JORTS');
    expect(list.start.next.next.next.data).toEqual('THREE');
    expect(list.end.data).toEqual('THREE');
  });

  it('should not insert an item if you ask it to insert it after a non-existent item', function() {
    list.insertAfter('BIRD SNOT', 'HOT PICKLES');
    expect(list.start.data).toEqual('ONE');
    expect(list.start.next.data).toEqual('TWO')
    expect(list.start.next.next.data).toEqual('THREE');
    expect(list.end.data).toEqual('THREE');
  });

});

describe('index tests for the JavaScript linked list', function() {
  var list = null;
  
  beforeEach(function() {
    list = new List();
    list.add('ONE');
    list.add('TWO');
    list.add('THREE');
    list.add('FOUR');
    list.add('FIVE');
    list.add('SIX');
  });
  
  it('should return null when given an index of 0 (because this is a one-based finder)', function() {
    var indexedItem = list.item(0);
    expect(indexedItem).toBeNull();
  });

  it('should return the first item in the list when given an index of 1', function() {
    var indexedItem = list.item(1);
    expect(indexedItem).toEqual(list.start);
  });

  it('should return the third item in the list when given an index of 3', function() {
    var indexedItem = list.item(3);
    expect(indexedItem).not.toBeNull();
    expect(indexedItem.data).toEqual('THREE');
  });

  it('should return the last item in the list when given an index of 6', function() {
    var indexedItem = list.item(6);
    expect(indexedItem).not.toBeNull();
    expect(indexedItem.data).toEqual('SIX');
  });
  
  it('should return null when given an index larger than the number of items in the list', function() {
    var indexedItem = list.item(27);
    expect(indexedItem).toBeNull();
  });
  
});

describe('each tests for the JavaScript linked list', function() {
  var list = null;
  
  beforeEach(function() {
    list = new List();
    list.add('ONE');
    list.add('TWO');
    list.add('THREE');
    list.add('FOUR');
    list.add('FIVE');
    list.add('SIX');
  });
  
  it('should iterate using "each" and monkey with the data for every item', function() {
    list.each(function(item) {
      item.data = item.data + ' PACK';
    });
    expect(list.item(1).data).toEqual('ONE PACK');
    expect(list.item(6).data).toEqual('SIX PACK');
  });

});