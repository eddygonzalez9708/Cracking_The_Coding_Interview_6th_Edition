/*
URLify: Write a method to replace all spaces in a string with '%20: 
You may assume that the string has sufficient space at the end to 
hold the additional characters, and that you are given the "true" 
length of the string. (Note: If implementing in Java, please use a 
character array so that you can perform this operation in place.)

EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20J ohn%20Smith" 

Hints: #53, #7 78
*/

function URLify(str, length) {
  const BEGIN_WHITE_SPACE = /^\s+/g
  const END_WHITE_SPACE = /\s+$/g
  const SINGLE_WHITE_SPACE = /\s{1}/g

  str = str.replace(BEGIN_WHITE_SPACE, '')
  str = str.replace(END_WHITE_SPACE, '')

  if (str.length === length) {
    return str.replace(SINGLE_WHITE_SPACE, '%20')
  } else {
    return 'Error!'
  }
}

console.log(URLify('Mr John Smith ', 13))