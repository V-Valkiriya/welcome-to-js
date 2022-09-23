// #todo

'use strict';

// declare and init: a = 'y';
let a = 'y';
// declare and init: b = 'x';
let b = 'x';
// declare: temp;
let temp;

// read: b = 'x';
// init: temp = b;
temp = b;
// read: a = 'y';
// assign: b = a;
b = a;
//  read: temp = 'x';
// assign: a = temp;
a = temp;

console.log(a === 'x'); // true
console.log(b === 'y'); // true
console.log(temp === 'x'); // true
