// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


/////// Assignment 
// export function accum(s: string): string {
// }
///////example 

/////// Solution

export function accum(str: string): string | void {
  if ( /^[a-zA-Z]+$/.test(str) ) {
    let a : string = '';
    for (let i = 0; i < str.length; i++) {
      a += str[i].toUpperCase() + ((i > 0) ? str[i].repeat(i+0).toLowerCase() : '');
      if (i !== str.length - 1) {
        a += '-';
      };
    };
    return a;
  }
}

console.log(accum('asvrQW'));


///////// for me
// function accum(s: string): string {
//   return s.split("").map((value, index) => (value.toUpperCase() + value.toLowerCase().repeat(index))).join("-");
// }




// ////////////// for reduce
// function accum(s: string): string {
  
//   return s.split('').reduce((a, b, i) => {
//     const newStr = b.repeat(i + 1);
//     const newStrLowercase = newStr.toLowerCase();
//     const changedStr = newStrLowercase.charAt(0).toUpperCase() + newStrLowercase.slice(1);
    
//     const divider = i > 0 ? '-' : '';
    
//     return `${a}${divider}${changedStr}`; 
//   }, '');
// }

// console.log(accum('asvrQW'));
