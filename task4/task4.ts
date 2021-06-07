// https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.


// Examples:
// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"


// Solution:

export class Kata {
    static spinWords(words: string) {
        let arrStr : String[] = [];

        words.split(' ').map((item) => {
        if (item.length >= 5) {
            arrStr.push(item.split('').reverse().join(''));
        } else if (item.length < 5) {
            arrStr.push(item);
        }
        });
        return arrStr.join(' ');
    }
  }

// ver2.0
export class Kata {
    static spinWords(words: string) {
        let arrStr = [];

        str.split(' ').map((item) => {
            return (item.length > 4) ? arrStr.push(item.split('').reverse().join('')) : arrStr.push(item);
        });
        
        return arrStr.join(' ');
    }
}