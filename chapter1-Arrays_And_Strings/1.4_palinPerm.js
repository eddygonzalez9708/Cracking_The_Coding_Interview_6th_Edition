/* 

Palindrome Permutation: 

Given a string, write a function to check if it is a permutation of a palin- drome.
A palindrome is a word or phrase that is the same forwards and backwards.
A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.

EXAMPLE

Input: Tact Coa

Output: True (permutations: "taco cat". "atco cta". etc.) Hints: #106, #121, #134, #136
*/

function palinPermOne(i) {
  const mem = {};

  for (let x = 0; x < i.length; x++) {
    // Current character in input string
    const char = i[x].toLowerCase();
    
    // Skip current iteration if the character is a whitespace
    if (char !== ' ') {
      // If the character is in memory, decrement by 1
      if (mem[char]) {
        mem[char]--;

        // If the value of the character in memory is 0, delete it in memory.
        if (mem[char] === 0) {
          delete mem[char];
        }
      } else {
        // Add character to memory
        mem[char] = 1;
      }
    }
  }
  
  // If the length of the content in memory is greater than one, the input string is not a palindrome
  return Object.keys(mem).length === 1;
}

// TESTS
console.log(palinPermOne('Tact Coa')); // Should return true
console.log(palinPermOne('Tact boa')); // Should return false

var palinPermTwo = function(string) {
  // create object literal to store charcount
  var chars = {};
  var currChar;
  var mulligan = false;
  var isPerm = true;

  // pump characters in, spaces not counted, all lowercase
  string.split('').forEach((char) => {
    if (char !== ' ') {
      currChar = char.toLowerCase();
      if (chars[currChar] === undefined) {
        chars[currChar] = 0;
      }
      chars[currChar]++;
    }
  });

  // check that all chars are even count, except for one exception
  Object.keys(chars).forEach((char) => {
    if (chars[char] % 2 > 0) {
    // if more than one exception, return false
      if (mulligan) {
        isPerm = false; // return in a forEach statment doesn't flow out of function scope
      } else {
        mulligan = true;
      }
    }
  });

  // if not return true
  return isPerm;
};

// TESTS
console.log(palinPermTwo('Tact Coa')); // Should return true
console.log(palinPermTwo('Tact boa')); // Should return false