// Generate a matrix that goes in a spiral
// param number n, when squared sets upper limit of spiral
// returns a two-dimensional array matrix
var generateMatrix = function(n) {
  var edgeArray = new Array(n),
      xColumn = 0,
      yRow = n,
      total = n * n,
      directionX = 1,
      directionY = 0,
      i = 1,                      
      j = 0,
      row = 0;
      
  n -= 1;
  
  // build the array dimensions    
  while(yRow) {
    yRow -= 1;
    edgeArray[yRow] = [ ];
  }
  
  // fill in the array
  while(i <= total) {
    edgeArray[yRow][xColumn] = i;
    i += 1;
    j += 1;
    xColumn += directionX; 
    yRow += directionY;
    if (j === n) {
      if (directionY < 0) {
        xColumn += 1; 
        yRow += 1; 
        n -= 2;
      }
      j = directionX;
      directionY = -directionY;
      directionX = directionY;
      directionY = j;
      j = 0;
    }
  }
  return edgeArray;
};

var numberToTest = 5, 
    testOutput = generateMatrix(numberToTest);
for (y = 0; y < numberToTest; y++) {
  console.log(testOutput[y].join(" "));
}

