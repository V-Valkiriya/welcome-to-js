// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let left = readNumber('left-num');

  let right = readNumber('right-num');

  console.log(left, right);

  // --- do the math ---

  // --- create a message

  let greeting = 'Let`s know';

  // --- display the message ---

  displayString('sum', greeting);
});
