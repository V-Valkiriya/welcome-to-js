'use strict';

/* Remove Spaces

The program removes spaces in the sentence.

  Data In:
  any text


  Data Out:
text before and text after without spaces

  Test Cases:
'hello sun JavaScript' -> 'before: hello sun JavaScript'
                          'after: hellosunJavaScript'

'Pieter Rabbit' -> 'before: Pieter Rabbit'
                    'after: PieterRabbit'                                   

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
