// #todo

'use strict';

/*


  Data In: 'hello';

  Data Out: 'now try to remember what it was:';

  Test Cases:

*/

/* ---   ?   --- */

let thingToRemember = prompt(
  'enter some text, then remember it.\n\n' +
    'if you remember it correctly you win',
);

if (thingToRemember !== null) {
  /* declare and init guess = promt */
  let guess = prompt('now try to remember what it was:');

  if (guess !== null) {
    if (guess === thingToRemember) {
      /* alert if user remember */
      alert('you win!');
    } else {
      /* alert if user don`t remember  */
      alert('try again.');
    }
  }
}

/* alert at the end */

alert('good bye');
