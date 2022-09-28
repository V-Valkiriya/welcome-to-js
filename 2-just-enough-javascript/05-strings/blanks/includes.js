// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('ckYo')); // true
console.log('HackYourFuture'.includes('urFut')); // true
console.log('HackYourFuture'.includes('Hack')); // true

console.log('HackYourFuture'.includes('ckyo')); // false
console.log('HackYourFuture'.includes('CkYo')); // false
console.log('HackYourFuture'.includes('yourfut')); // false

console.log('good Bye'.includes(' Bye')); // true
console.log('Green. Car'.includes('. Car')); // true
console.log('Ann + Svyat'.includes('+')); // true

console.log('Hi Pieter'.includes('hi')); // false
console.log('Simple Road'.includes('road')); // false
console.log('Emma Stone'.includes('Ima')); // false
