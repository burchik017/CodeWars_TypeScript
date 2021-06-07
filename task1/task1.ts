// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


/////// Assignment 
// export class Kata {
//     static disemvowel(str: string) : string {
//       return str.replace(/[aeiou]/gi, '');
//     }
//   }
///////example 

/////// Solution

export class Kata {
    static disemvowel(str: string) : string {
      return str.replace(/[aeiou]/gi, '');
    }
  }
 console.log(Kata.disemvowel('This website is for losers LOL!'));


// ver2.0

//  function disemvowel(str) {
//   let newString = "";
//   for (var i = 0; i < str.length; i++) {
//     if (!"aeiou".includes(str[i].toLowerCase())) {
//       newString += str[i];
//     };
//   }
//   return newString
// }

// console.log(disemvowel("This website is for losers LOL!"));