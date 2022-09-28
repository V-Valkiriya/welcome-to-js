'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// declare and init: a = 'y';
let a = 'y';
// declare and init: b = 'x';
let b = 'x';
// declare and init: t = '';
let t = '';

console.log(a, b, t); // 'y x '

// read: a = 'y';
// assign: t = 'y';
t = a;
// read: b = 'x';
// assign: a = 'x';
a = b;
// read: t = 'y';
// assign: b = 'y';
b = t;

console.log(a, b, t); // 'x, y, y'

// what did you do in this program? Swaps `a` and `b` in places.
// what are the final values of `a` and `b`? `x` and `y`.
// how are they changed from the initial values. Swaps in places.

// is it possible to swap a and b without using t? No.
