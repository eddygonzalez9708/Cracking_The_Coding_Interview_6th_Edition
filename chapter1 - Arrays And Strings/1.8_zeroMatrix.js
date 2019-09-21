/*
Zero Matrix:

Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

Hints: # 17, #74, #102
*/

function zeroMatrix(matrix) {
  // Make a copy of the matrix
  const matrix_cpy = []

  matrix.forEach(arr => {
    matrix_cpy.push([...arr])
  })

  function changeCol(matrix_cpy, col) {
    for (let row = 0; row < matrix.length; row++) {
      matrix_cpy[row][col] = 0
    }
  }

  function changeRow(matrix_cpy, row) {
    const row_len = matrix_cpy[row].length
    matrix_cpy[row] = Array(row_len).fill(0)
  }

  // Check each item in each row for a 0
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        changeCol(matrix_cpy, col)
        changeRow(matrix_cpy, row)
        break;
      }
    }
  }

  return matrix_cpy
}

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

console.log(zeroMatrix(testMatrixOne));

/* Should be:
[
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [0, 0, 0, 0],
  [1, 0, 1, 1],
  [1, 0, 1, 1],
  [1, 0, 1, 1]
] */

console.log(zeroMatrix(testMatrixTwo));

/* Should be:
[
  [0, 2, 0],
  [0, 0, 0],
  [0, 7, 0],
  [0, 9, 0]
] */