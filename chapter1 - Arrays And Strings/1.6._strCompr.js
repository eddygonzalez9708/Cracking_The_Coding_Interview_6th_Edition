/*
1.6 String Compression: 

Implement a method to perform basic string compression using the counts of repeated characters.
For example, the string aabcccccaaa would become a2b1c5a3. 
If the "compressed" string would not become smaller than the original string, your method should return the original string.
You can assume the string has only uppercase and lowercase letters (a - z).

Hints: #92, # 110
*/

function strComprOne(str) {
  let newStr = str[0]; // compressed string
  let count = 1; // counter to keep track of each char repeated

  for (let x = 1; x < str.length; x++) {
    const last_char = newStr.length - 1

    if (str[x] === newStr[last_char]) {
      count++
      
      if (x === str.length - 1) {
        newStr += count
      }
    } else {
      newStr += count + str[x]
      count = 1
    }
  }

  return newStr.length < str.length ? newStr : str;
}

// Tests
// console.log(strComprOne('aabcccccaaa')); // Should return a2b1c5a3
// console.log(strComprOne('aaaaaa')); // Should return a6

function strComprTwo(string) {
  var compressed = '';
  var currChar = '';
  var currCount = '';
  var maxCount = 1;
  
  for (var i = 0; i < string.length; i++) {
    if (currChar !== string[i]) {
      console.log(currChar, string[i], i, maxCount);
      
      compressed = compressed + currChar + currCount;
      maxCount = Math.max(maxCount, currCount);
      currChar = string[i];
      currCount = 1;
    } else {
      currCount++;
    }
  }

  compressed = compressed + currChar + currCount;
  maxCount = Math.max(maxCount, currCount);

  return maxCount === 1 ? string : compressed;
};

// Tests
console.log(strComprTwo('aabcccccaaa')) // Should return a2b1c5a3;
console.log(strComprTwo('aaaaaa')); // Should return a6