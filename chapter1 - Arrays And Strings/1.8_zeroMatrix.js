/*
1.8 Zero Matrix:

Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

Hints: # 17, #74, #102
*/

function zeroMatrixOne(matrix) {
  // Make a copy of the matrix
  const matrix_cpy = [];

  matrix.forEach(arr => {
    matrix_cpy.push([...arr]);
  })

  function changeCol(matrix_cpy, col) {
    for (let row = 0; row < matrix.length; row++) {
      matrix_cpy[row][col] = 0;
    }
  };

  function changeRow(matrix_cpy, row) {
    const row_len = matrix_cpy[row].length;
    matrix_cpy[row] = Array(row_len).fill(0);
  };

  // Check each item in each row for a 0
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        changeCol(matrix_cpy, col);
        changeRow(matrix_cpy, row);
        break;
      }
    }
  }

  return matrix_cpy;
};

// Testing
let testMatrixOne = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]];

let testMatrixTwo = [
  [1, 2, 4],
  [0, 1, 0],
  [5, 7, 10],
  [8, 9, 11]];

console.log(zeroMatrixOne(testMatrixOne));

/* Should be:
[
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [0, 0, 0, 0],
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [1, 0, 1, 1]
] */

console.log(zeroMatrixOne(testMatrixTwo));

/* Should be:
[
  [0, 2, 0],
  [0, 0, 0],
  [0, 7, 0],
  [0, 9, 0]
] */

/* Helper Functions */
function checkZeros(matrix) {
  var matrixHeight = matrix.length;
  var matrixWidth = matrix[0].length;
  var rowsToZeroify = {}; // use hashtables to remove duplicates
  var colsToZeroify = {};

  for (var i = 0; i < matrixHeight; i++) {
    for (var j = 0; j < matrixWidth; j++) {
      if (matrix[i][j] === 0) {
        rowsToZeroify[i] = true;
        colsToZeroify[j] = true;
      }
    }
  }

  return {
    rowsToZeroify: rowsToZeroify,
    colsToZeroify: colsToZeroify
  }
};

function printMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
};

function zeroifyCol(matrix, col) {
  for (var i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
};

function zeroifyCols(matrix, zeroScan) {
  for (var col in zeroScan.colsToZeroify) {
    zeroifyCol(matrix, Number(col));  
  }
};

function zeroifyRow(matrix, row) {
  for (var i = 0; i < matrix[row].length; i++) {
    matrix[row][i] = 0;
  }
};

function zeroifyRows(matrix, zeroScan) {
  for (var row in zeroScan.rowsToZeroify) {
    zeroifyRow(matrix, Number(row));  
  }
};

/* Main Function */

function zeroMatrixTwo(matrix) {
  if(matrix.length === 0) { return; }

  var zeroScan = checkZeros(matrix);

  zeroifyCols(matrix, zeroScan);
  zeroifyRows(matrix, zeroScan);
};

// Testing
var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]];

// Tests for CTCI Solution
console.log('before');
printMatrix(testMatrix);

zeroMatrixTwo(testMatrix);

console.log('after');
printMatrix(testMatrix);

// function should mutate the matrix to the following:
// [
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [0, 0, 0, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1]
// ]
