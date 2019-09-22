/*
1.7 Rotate Matrix:

Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
Can you do this in place?

Hints: #51, #100
*/

// My Solution

function rotateMatrixOne(matrix) {
  const rotatedMatrix = [];

  for (let x = 0; x < matrix.length; x++) {
    rotatedMatrix.push([]);

    for (let y = matrix.length - 1; y > -1; y--) {
      rotatedMatrix[x].push(matrix[y][x]);
    }
  }

  return rotatedMatrix;
}

var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]];

// Tests for My Solution
console.log(rotateMatrixOne(testMatrix));

/* Should be:
  [
    [1, 0, 0, 1],
    [0, 0, 1, 2],
    [0, 1, 2, 3],
    [1, 2, 3, 4]
  ] */

// CTCI Solution

function rotateMatrixTwo(matrix) {
  var edge = matrix.length - 1;
  
  function movePixels(row, col) {
    // starts at m[row][col]
    // moves to m[col][edge - row]
    var fromRow;
    var fromCol;
    var fromPixel;
  
    // first transformation
    var toRow = row; // 0
    var toCol = col; // 0
    var toPixel = matrix[row][col]; // 1

    // console.log('toRow', toRow)
    // console.log('toCol', toCol)
    // console.log('toPixel', toPixel, '\n')
  
    // Do rotational transformation 4 times
    for (var i = 0; i < 4; i++) {
      // console.log('i', i)
      // console.log('old matrix', matrix)
      fromRow = toRow;
      fromCol = toCol;
      toRow = fromCol;
      toCol = edge - fromRow;

      // console.log('fromRow', fromRow)
      // console.log('fromCol', fromCol)
      // console.log('toRow', toRow)
      // console.log('toCol', toCol)
  
      fromPixel = toPixel;
      toPixel = matrix[toRow][toCol];
      matrix[toRow][toCol] = fromPixel;

      // console.log('fromPixel', fromPixel)
      // console.log('toPixel', toPixel)
      // console.log(`matrix[${toRow}][${toCol}]`,  matrix[toRow][toCol])
      // console.log('matrix', matrix, '\n')
    }
  }
  
  for (var i = 0; i < matrix.length / 2; i++) {
    for (var j = i; j < edge - i; j++) {
      console.log('row', i, 'col', j);
      movePixels(i, j);
    }
  }
}

// Tests for CTCI Solution
console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
  
rotateMatrixTwo(testMatrix);
  
console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
  
/*
var edge = n - 1;

pattern observed:

i) col value becomes row value

ii) row value is subtracted off edge and becomes col value

0100
0000
0000
0000

position of 1 -> m[0][1]

0000
0001
0000
0000

position of 1 -> m[1][edge]

0000
0000
0000
0010

position of 1 -> m[edge][edge - 1]

0000
0000
1000
0000

position of 1 -> m[edge - 1][0]

0100
0000
0000
0000

position of 1 -> m[0][1] 

flow of iteration:

i) start from top left corner and move diagonally down

ii) for each row, iterate pixels until edge - 1 

(pixel at edge would have been transformed by the first pixel)

iii) at each pixel iteration, iterate through 4 sides

iv) do iteration in place, i.e. store a temp pixel for moving things around
*/