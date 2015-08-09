// fizzbuzz game in Javascript
// Continuing to mess about with interview-related stuff

// Simple to understand version, probably easy to maintain.
// Start and End expect integers, with start less than end.
function fizzBuzz(start, end) {
  var results = [ ],
      i;
  
  for (i = start; i <= end; i++) {
    if (i % 15 === 0) {
      results[i] = 'FizzBuzz';
    } else if (i % 3 === 0) {
      results[i] = 'Fizz';
    } else if (i % 5 === 0) {
      results[i] = 'Buzz'
    } else {
      results[i] = i;
    }
  }
  
  // create a comma-delimited string from the array
  return results.slice(start).join(', ');
}


// slightly more streamlined
// again expects integers with start less than end
function fizzBuzz2(start, end) {
  var msg,
      i,
      results = '';
      
  for (i = start; i <= end; i++, msg = '') {
    if (i % 3 === 0) {
      msg += 'Fizz';
    }
    if (i % 5 === 0) {
      msg += 'Buzz';
    }
    results += (msg || i) + ', '
  }
  
  // strip trailing comma and return
  return results.substring(0, results.length - 2);
}

// on one line, harder to maintain
function fizzBuzz3(start, end) {
  var i,
      results = [ ];
      
  for(i = start; i <= end; i++) {
    results[i] = (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
  }
  
  return results.slice(start).join(', ');
}