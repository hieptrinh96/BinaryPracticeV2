const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    // getting charCode of each index
    let decimal = str.charCodeAt(i);
    // converting charCode to strings
    console.log('decimal =', decimal)
    let string = decimal.toString();
    console.log('string =', string);
    // converting string back into a number
    let num = parseInt(string)
    console.log('num = ', num);
    // converting number to a binary string
    let binary = num.toString(2);
    console.log('binary = ', binary)
    // adding the helper function to our binaryString
    binaryString = addZeros(binary, 8);
    console.log('binaryString =', binaryString)
    // replacing empty string with each index;
    answer += binaryString;
  }
  return answer;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

// console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

// console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001