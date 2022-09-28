// #todo

'use strict';
/*


  Data In: 'hello'

  Data Out: 'exactly 5!'

  Test Cases:

*/

/* declare and init: imput;
   declare and init: message; */

let input = prompt('enter anything longer than 5 characters');
let message;
if (input !== null) {
  if (input.length < 5) {
    /* assign message if input length less than 5 */
    message = 'too short';
  } else if (input.length > 5) {
    /* assign message if input length less than 5 */
    message = 'long enough';
  } else if (input.length === 5) {
    /* assign message if input length is 5 */
    message = 'exactly 5!';
  }
} else {
  /* assign message if user choose 'cancel' */
  message = 'you canceled :(';
}

/* allert function */

alert(message);
