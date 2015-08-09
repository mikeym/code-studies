// Jasmine tests to verify the dedupe function
// M2

describe('it should be able to remove duplicates from a list of email addresses', function() {
  var addressListWithDupes;
  
  beforeEach(function() {
    // 30 email addresses to test with, 20 unique addresses
    addressListWithDupes = [ ];
    addressListWithDupes.push('apple@pear.com');
    addressListWithDupes.push('pizza@beer.com');
    addressListWithDupes.push('beans@cheese.com');
    addressListWithDupes.push('coffee@chocolate.org');
    addressListWithDupes.push('crepes@suzzette.net');
    addressListWithDupes.push('apple@pear.com');
    addressListWithDupes.push('beer@nuts.com');
    addressListWithDupes.push('coffee@chocolate.com');
    addressListWithDupes.push('crepes@suzzette.net');
    addressListWithDupes.push('popcorn@coke.com');
    addressListWithDupes.push('beanie@weenies.com');
    addressListWithDupes.push('beer@nuts.com');
    addressListWithDupes.push('beans@cheese.com');
    addressListWithDupes.push('pork@roast.com');
    addressListWithDupes.push('turkey@lurkey.org');
    addressListWithDupes.push('peach@pie.com');
    addressListWithDupes.push('elephantheart@plum.com');
    addressListWithDupes.push('apple@pear.com');
    addressListWithDupes.push('sushi@rice.org');
    addressListWithDupes.push('coffee@chocolate.com');
    addressListWithDupes.push('grilled@cheese.com');
    addressListWithDupes.push('chocolate@cake.com');
    addressListWithDupes.push('french@fries.net');
    addressListWithDupes.push('peach@pie.com');
    addressListWithDupes.push('pork@roast.com');
    addressListWithDupes.push('jelly@doughnut.com');
    addressListWithDupes.push('sushi@rice.org');
    addressListWithDupes.push('chocolate@creampie.org');
    addressListWithDupes.push('beans@cheese.com');
    addressListWithDupes.push('french@toast.net');
  });
  
  it('should dedupe the array of email addresses without changing the original list', function() {
    var dedupedList;
    expect(addressListWithDupes.length).toEqual(30);
    dedupedList = removeDuplicates(addressListWithDupes);
    expect(dedupedList.length).toEqual(20);
    expect(addressListWithDupes.length).toEqual(30);
  });
  
  it('should include one of each of the original addresses in the deduped list', function() {
    var dedupedList = removeDuplicates(addressListWithDupes);
    expect(dedupedList.length).toEqual(20);
    
    // using shift to get unique deduped items from array in top-down order
    expect(dedupedList.shift()).toEqual('apple@pear.com');
    expect(dedupedList.shift()).toEqual('pizza@beer.com');
    expect(dedupedList.shift()).toEqual('beans@cheese.com');
    expect(dedupedList.shift()).toEqual('coffee@chocolate.org');
    expect(dedupedList.shift()).toEqual('crepes@suzzette.net');
    expect(dedupedList.shift()).toEqual('beer@nuts.com');
    expect(dedupedList.shift()).toEqual('coffee@chocolate.com');
    expect(dedupedList.shift()).toEqual('popcorn@coke.com');
    expect(dedupedList.shift()).toEqual('beanie@weenies.com');
    expect(dedupedList.shift()).toEqual('pork@roast.com');
    expect(dedupedList.shift()).toEqual('turkey@lurkey.org');
    expect(dedupedList.shift()).toEqual('peach@pie.com');
    expect(dedupedList.shift()).toEqual('elephantheart@plum.com');
    expect(dedupedList.shift()).toEqual('sushi@rice.org');
    expect(dedupedList.shift()).toEqual('grilled@cheese.com');
    expect(dedupedList.shift()).toEqual('chocolate@cake.com');
    expect(dedupedList.shift()).toEqual('french@fries.net');
    expect(dedupedList.shift()).toEqual('jelly@doughnut.com');
    expect(dedupedList.shift()).toEqual('chocolate@creampie.org');
    expect(dedupedList.shift()).toEqual('french@toast.net');

    // we should have emptied the list
    expect(dedupedList.length).toEqual(0);
  });
  
  it('should not make any changes if the list is already deduped', function() {
    var dedupedList = removeDuplicates(addressListWithDupes),
        doublyDedupedList = removeDuplicates(dedupedList);
        
    expect(dedupedList.length).toEqual(doublyDedupedList.length);
    expect(dedupedList).toEqual(doublyDedupedList);
  });
});