// Bubble Sort in JavaScript
// Based on a blog post by Nicholas Zakas
// http://www.nczonline.net/blog/2009/05/26/computer-science-in-javascript-bubble-sort/

// function to swap two items in a given array
// expects an array of items and numeric index arguments
function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

// performs a bubble sort on a supplied array of items
function bubbleSort(items) {
  var len = items.length,
      i,
      j,
      stop;
  
  // the outer loop controls how many passes are made over the array    
  for (i = 0; i < len; i++) {
    
    // the inner loop determines where to stop the comparisons
    for (j = 0, stop = len - i; j < stop; j++) {
      if (items[j] > items[j + 1]) {
        swap(items, j, j+1);
      }
    }
  }
  
  return items;
}
