// https://www.codewars.com/kata/541c8630095125aba6000c00/train/typescript

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit,
//  continue reducing in this way until a single-digit number is produced. 
//  The input will be a non-negative integer.

// Examples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11


// Solution:

export const digitalRoot = (n:number):number => {
    let str : string = n.toString();
    let sum : number = 0;
    let newStr : string[] = str.split('')
    newStr.map((i : any) => {
      sum += i++;
    });
    let sumString : string = sum.toString();
    if (sumString.length > 1) {
      let sumDigits = sumString.split("").map(Number);
      let firstSumDigit = sumDigits.slice(0);
      let lastSumDigit = sumDigits.slice(-1);
      return firstSumDigit[0] + lastSumDigit[0];
    } else {
        return sum;
    }
  };



//   ver 2.0
export const digitalRoot = (n:number):number => {
    let result : number = 0;
    n.toString().split('').map (n => {
      result += Number(n)
    });
    return result > 9 ? digitalRoot(result) : result;
};



//   js
function digitalRoot(n) {
    var digits = n.toString().split("").map(Number);
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
      sum += digits[i];
    }
    var sumString = sum.toString();
    if (sumString.length > 1) {
      var sumDigits = sumString.split("").map(Number);
      var firstSumDigit = sumDigits.slice(0);
      var lastSumDigit = sumDigits.slice(-1);
      return firstSumDigit[0] + lastSumDigit[0];
    } else {
        return sum;
    }
  
  }

  console.log(digitalRoot(14))