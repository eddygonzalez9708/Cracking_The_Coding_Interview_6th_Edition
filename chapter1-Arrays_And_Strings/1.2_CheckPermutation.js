/*
1.2 Check Permutation: 
Given two strings, write a method to decide if one is a permutation of the other.

Hints: #7, #84, #722, #737
*/

function CheckPermutation(str1, str2) {
  // if different lengths, return false
  if (str1.length !== str2.length) {
    return false
  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    const new_str1 = str1.split('').sort().join('')
    const new_str2 = str2.split('').sort().join('')
    return new_str1 === new_str2
  }
}

// Tests

console.log(CheckPermutation('Eddy', 'yddE')) // Should return true
console.log(CheckPermutation('hacker', 'fbi')) // Should return false
console.log(CheckPermutation('hello', 'ollhe')) // Should return true
console.log(CheckPermutation('aba', 'aaba')) // Should return false
console.log(CheckPermutation('aba', 'aab')) // Should return true
console.log(CheckPermutation('aba', 'aa')) // Should return false
