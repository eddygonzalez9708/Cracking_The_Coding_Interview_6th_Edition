/* 
1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

Hints: #7, #84, #722, #737
*/

function IsUnique(string) {

    /* 
    The runtime is O(n^2). There are no additional data structures 
    used. For each character, check remaining characters for duplicates.
    */
  
    for (let firstChar = 0; firstChar < string.length; firstChar++) {
      for (let secondChar = firstChar + 1; secondChar < string.length; secondChar++) {
        if (string[firstChar] === string[secondChar]) return false
      }
    }
  
    return true
  }
  
console.log(IsUnique('Bed')) // Should return true
console.log(IsUnique('Eddy')) // Should return false
console.log(IsUnique('Code')) // Should return true  