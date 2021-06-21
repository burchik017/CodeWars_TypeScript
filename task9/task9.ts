// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/typescript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in
// a human-readable format (HH:MM:SS) HH = hours, padded to 2 digits, range: 00 - 99 MM = minutes,
// padded to 2 digits, range: 00 - 59 SS = seconds, padded to 2 digits, range: 00 - 59 The maximum
// time never exceeds 359999 (99:59:59)



// Solution:
function humanReadable (seconds : number):string {
  let hours : number = seconds / 3600
  let minutes : number = seconds / 60 % 60
  let newSeconds : number = seconds %  60 ;
  return formatDate(hours) + ':' + formatDate(minutes) + ':' + formatDate(newSeconds);
}

function formatDate (n) {
  let number : number = parseInt(n)
  return number > 9 ? number : '0'+number;
}