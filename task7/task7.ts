https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/typescript

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position
//  the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain
//  valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


// Solution:
export function order(words:string):string{
    let reg = /\d/;
   return words.split(' ').sort(function(a : any, b : any) {
     return a.match(reg) - b.match(reg);
   }).join(' ');
 }



//  js
// function order(words){
//     let wordArray = words.split(' ');
//     let resultArray = [];
//     for(let i=1; i<=words.length; i++) {
//       wordArray.forEach((word) => {
//         if (word.indexOf(i.toString()) >= 0) {
//           resultArray.push(word);
//         }
//       });
//     };
//     return resultArray.join(' ');
//   }
  
//    console.log(order("is2 Thi1s T4est 3a"))