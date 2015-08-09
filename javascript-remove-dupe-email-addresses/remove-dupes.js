// Remove duplicates from a list
// M2

// Deduplicates (dedupes) a supplied array of addresses, returning a new array
// uses memoization to store each address we've looked at in memo[]
// only pushes to deduped[] once per address, and returns it
// memo[] is an associative array, deduped[] a standard array
function removeDuplicates(emailAddresses) {
  var memo = [ ],
      deduped = [ ];
  
  emailAddresses.map(function(addr) {
    if (!memo[addr]) {
      memo[addr] = 1;     // dummy value, we only care about remembering the key
      deduped.push(addr);
    }
  });
  
  return deduped;
}

