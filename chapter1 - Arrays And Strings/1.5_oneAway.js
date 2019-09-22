/*
1.5 One Away:

There are three types of edits that can be performed on strings: 

insert a character, remove a character, or replace a character.

Given two strings, write a function to check if they are one edit (or zero edits) away.

EXAMPLE

pale, pIe -> true
pales, pale -> true
pale, bale -> true 
pale, bake -> false 

Hints: #23, #97, #130
*/

// My Solution

function oneAwayOne(str1, str2) {
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
          ptr1++;
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
      ptr1++;
      ptr2++;
    }
  }

  return edits < 2;
}

// Tests for My Solution
console.log(oneAwayOne('pale', 'pIe')); // Should return true
console.log(oneAwayOne('pales', 'pale')); // Should return true
console.log(oneAwayOne('pale', 'bale')); // Should return true 
console.log(oneAwayOne('pale', 'bake')); // Should return false 

// CTCI Solution

function oneAwayTwo(string1, string2) {
  // insert a char for str1 -> remove a char for str2
  function checkOneMissing(first, second) {
    if (first.length !== second.length - 1) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0; // first Pointer
      var sP = 0; // second Pointer
      
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false;
          } else {
            mulligan = true;
            sP++; // second length is longer
          }
        } else {
          fP++;
          sP++;
        }
      }
      
      return true;
    }
  }

  function checkOneDiff(first, second) {
    if (first.length !== second.length) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0; // first Pointer
      var sP = 0; // second Pointer
      
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false; // more than one mismatch
          } else {
            mulligan = true; // use up mulligan
          }
        }
        
        fP++;
        sP++;
      }
      
      return true;
    }
  }
  
  // insert a char for str1 -> remove a char for str2
  // check one diff

  // console log checks
  // console.log(string1, string2, 'checkMiss', checkOneMissing(string1, string2));
  // console.log(string2, string1, 'checkMiss', checkOneMissing(string2, string1));
  // console.log(string1, string2, 'checkDiff', checkOneDiff(string1, string2));

  return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkOneDiff(string1, string2);
};

// Tests for CTCI Solution
console.log(oneAwayTwo('pale', 'ple')); // Should return true
console.log(oneAwayTwo('pales', 'pale')); // Should return true
console.log(oneAwayTwo('pale', 'bale')); // Should return true
console.log(oneAwayTwo('pale', 'bake')); // Should return false