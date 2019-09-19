/*
Rotate Matrix:

Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
Can you do this in place?

Hints: #51, #100
*/

function rotateMatrix(matrix) {
  const rotatedMatrix = []

  for (let x = 0; x < matrix.length; x++) {
    rotatedMatrix.push([])

    for (let y = matrix.length - 1; y > -1; y--) {

      rotatedMatrix[x].push(matrix[y][x])
    }
  }

  return rotatedMatrix
}

var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]];

// Tests
console.log(rotateMatrix(testMatrix)) 

/* Should be:
  [
    [1, 0, 0, 1],
    [0, 0, 1, 2],
    [0, 1, 2, 3],
    [1, 2, 3, 4]
  ] */