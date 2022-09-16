'use strict';

/* Flip Five

This program reverses the input only if it is 5 characters long.

  Data In:
  any text


  Data Out:
  the reversed input if it was 5 characters long
  message: "nope, try again" if it was not 5 characters long


  Test Cases:
'hello' -> 'olleh'
'helo' -> 'nope, try again'
'sweet' -> 'teews'
'swet' -> 'nope, try again'


*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
