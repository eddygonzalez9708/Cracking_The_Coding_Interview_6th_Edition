/*
1.9 String Rotation:

Assume you have a method isSubstring which checks if one word is a substring of another.
Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.,"waterbottle"is a rotation of "erbottlewat").

Hints: #34, #88, #104
*/

// My Solution

function strRotationOne(str1, str2) {
  // Concatenate s2 with itself
  const newStr = str2 + str2

  // Create two pointers 
  // The length between ptr1 and pt2 is the length of s1
  let ptr1 = 0
  let ptr2 = str1.length

  // Check if s1 is in the new string
  while (ptr2 <= newStr.length) {
    if (newStr.slice(ptr1, ptr2) === str1) {
      return true;
    }

    ptr1++;
    ptr2++;
  }

  return false;
};

// Test for My Solution
console.log(strRotationOne('waterbottle', 'erbottlewat')); // Should return true
console.log(strRotationOne('waterbottle', 'erbotlewatt')); // Should return false
console.log(strRotationOne('aaata', 'aataa')) // Should return true

// CTCI Solution
  
function strRotationTwo(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return (str2 + str2).includes(str1); // one call of isSubString
};

// Approaches:
// a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
// b) look for starting character before moving around and rotating -> starting characters might repeat
// c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring

// Tests for CTCI Solution
console.log(strRotationTwo('waterbottle', 'erbottlewat')); // Should return true
console.log(strRotationTwo('waterbottle', 'erbotlewatt')); // Should return false
console.log(strRotationTwo('aaata', 'aataa')) // Should return true