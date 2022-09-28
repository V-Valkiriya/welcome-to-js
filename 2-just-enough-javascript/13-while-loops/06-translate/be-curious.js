// #todo //#notresolve

'use strict';

/* Be Curious


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */

let input = null; // input <- null
while (input === null) { // WHILE: input === null
       input = prompt('enter something, it will become curious'); //   input <- prompt('enter something, it will become curious')
}// :END WHILE

let output = input;// output <- input
if (input[input.length - 1] !== '?')  { // IF: input[input.length - 1] !== '?'
output = output + '?';//   output <- output + '?'
}// :END IF
/* ---  ?  --- */



/* ---  ?  --- */

alert(output);// alert(output)
