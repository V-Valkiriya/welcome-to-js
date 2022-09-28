// #todo

'use strict';

// declare and init a = 'bye';
let a = 'bye';
// declare and init b = 'hi';
let b = 'hi';
// declare temp;
let temp;

// read: a = 'bye';
// init temp = a;
temp = a;
// read b = 'hi';
// assign a = b;
a = b;
// read: temp = 'bye';
// assign b = temp;
b = temp;

console.log('a:', a); // a: hi
console.log('b:', b); // b: bye
console.log('temp:', temp); // temp: bye
