/*
1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.

Given two strings, write a function to check if they are one edit (or zero edits) away.

EXAMPLE

pale, pIe -> true
pales, pale -> true
pale, bale -> true 
pale, bake -> false 

Hints: #23, #97, #130
*/

function oneAway(str1, str2) {
  // Create pointers for both strings
  let ptr1 = 0;
  let ptr2 = 0;

  // Use a counter to keep track of edits
  let edits = 0;

  while (ptr1 < str1.length || ptr2 < str2.length) {
    if (ptr1 < str1.length && ptr2 < str2.length) {
      if (str1[ptr1] === str2[ptr2]) {
        ptr1++;
        ptr2++;
      } else {
        if (str1[ptr1 + 1] === str2[ptr2]) {
          ptr1++
        } else if (str2[ptr2 + 1] === str1[ptr1]) {
          ptr2++;
        } else {
          edits++;
          ptr1++;
          ptr2++;
        }
      }
    } else {
      edits++;
      ptr1++
      ptr2++
    }
  }

  return edits < 2;
}

console.log(oneAway('pale', 'pIe')); // Should return true
console.log(oneAway('pales', 'pale')); // Should return true
console.log(oneAway('pale', 'bale')); // Should return true 
console.log(oneAway('pale', 'bake')); // Should return false 