'use strict';

let input = prompt('hello, my name is Valeriya! Enter your name:');
let last = prompt('enter your lastname');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + ' ' + last + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
