// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let left = readNumber('left-num');

  let right = readNumber('right-num');

  console.log(left, right);

  // --- compare the numbers ---
 


  // --- create a message


  // --- display the message ---

  displayString('compared', message);
});