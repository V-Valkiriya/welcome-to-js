'use strict';

/* Mirror

The program reflects the word as in mirror

  Data In:
  any text


  Data Out:
  reserved text 'bar' text


  Test Cases:
'olleh' '|' 'hello'
'nus' '|' 'sun'
'tpircSavaJ' '|' 'JavaScript'


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
