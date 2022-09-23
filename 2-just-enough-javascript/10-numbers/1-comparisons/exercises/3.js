// #todo

'use strict';

let number = 0;
// let number = 0.5;
// let number = 1;
// let number = 1.5;
// let number = 2;
// let number = 2.5;
// let number = 3;
// let number = 3.5;
// let number = 4;
// let number = 4.5;
// let number = 5;
// let number = 5.5;
// let number = 6;

console.log(number + ' between 1 and 2, OR between 4 and 5 (exclusive)'); // '0 between 1 and 2, OR between 4 and 5 (exclusive)'
// '0.5 between 1 and 2, OR between 4 and 5 (exclusive)'
// '1 between 1 and 2, OR between 4 and 5 (exclusive)'
// '1.5 between 1 and 2, OR between 4 and 5 (exclusive)'
// '2 between 1 and 2, OR between 4 and 5 (exclusive)'
// '2.5 between 1 and 2, OR between 4 and 5 (exclusive)'
// '3 between 1 and 2, OR between 4 and 5 (exclusive)'
// '3.5 between 1 and 2, OR between 4 and 5 (exclusive)'
// '4 between 1 and 2, OR between 4 and 5 (exclusive)'
// '4.5 between 1 and 2, OR between 4 and 5 (exclusive)'
// '5 between 1 and 2, OR between 4 and 5 (exclusive)'
// '5.5 between 1 and 2, OR between 4 and 5 (exclusive)'
// '6 between 1 and 2, OR between 4 and 5 (exclusive)'

// number is greater than 1 AND is less than 2 (exclusive)
console.log(number > 1 && number < 2); // false/false/false/true/false/false/false/false/false/false/false/false/false

// number is greater than 4 AND less than 5 (exclusive)
console.log(number > 4 && number < 5); // false/false/false/false/false/false/false/false/false/true/false/false/false

// number between 1 and 2 OR between 4 and 5 (exclusive)
console.log((1 < number && number < 2) || (4 < number && number < 5)); // false/false/false/true/false/false/false/false/false/true/false/false/false
