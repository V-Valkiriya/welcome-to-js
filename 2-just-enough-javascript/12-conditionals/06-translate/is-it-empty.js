// #todo

'use strict';

/*


  Data In: 'hello';

  Data Out: 'your input is not empty';

  Test Cases: 

*/

/* declare and init: input */

let input = prompt('do whatever you want');

/* declare and init: message */

let message = 'your input is ';
if (input === null) {
  /* assign: message if choose 'cancel' */
  message = message + 'null';
} else {
  /* declare and init: maybeNot if choose 'ok' */
  let maybeNot = '';
  if (input.length !== 0);
  {
    /* assign: maybeNot if fill input */
    maybeNot = 'not ';
  }
  message = message + maybeNot + 'empty';
}

/* allert function */

alert(message);
