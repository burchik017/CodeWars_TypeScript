https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [8, 64]



// Solution:
export function parse(data: string): number[] {
    let result : number = 0;
    let arrResult : number[] = [];
    data.split('').map((a) => {
      if (a === 'i') {
        result += 1;
      } else if (a === 'd') {
        result -= 1;
      } else if (a === 's') {
        result = result * result;
      } else if (a === 'o') {
        arrResult.push(result)
      };
    });
    return arrResult
  }



//   ver 2.0 
export function parse(data: string): number[] {
    let v = 0, result = []
    for (let d of data.split('')) {
      switch (d) {
        case 'i': v++; break
        case 'd': v--; break
        case 's': v *= v; break
        case 'o': result.push(v)
      }
    }
    return result
  }