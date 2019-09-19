/* 
1.1 Is Unique: 
Implement an algorithm to determine if a str has all unique characters. 
What if you cannot use additional data structures?

Hints: #7, #84, #722, #737
*/

function IsUniqueOne(str) {
  let mem = {}

  /* 
  The runtime is O(n). The space complexity is O(n). 
  For each character, check if it exists in the memory cache. 
  If the character exists in the memory cache, then return false.
  If the character does not exist is in the memory cache, then add the character 
  to the memory cache.
  */

  for (let x = 0; x < str.length; x++) {
    if (mem[str[x]]) {
      return false
    } else {
      mem[str[x]] = true
    }
  }

  return true
}

console.log(IsUniqueOne('Bed')) // Should return true
console.log(IsUniqueOne('Eddy')) // Should return false
console.log(IsUniqueOne('Code')) // Should return true 

function IsUniqueTwo(str) {

  /* 
  The runtime is O(n^2). There are no additional data structures 
  used. For each character, check remaining characters for duplicates.
  */

  for (let x = 0; x < str.length; x++) {
    for (let y = x + 1; y < str.length; y++) {
      if (str[x] === str[y]) return false
    }
  }

  return true
}

console.log(IsUniqueTwo('Bed')) // Should return true
console.log(IsUniqueTwo('Eddy')) // Should return false
console.log(IsUniqueTwo('Code')) // Should return true  