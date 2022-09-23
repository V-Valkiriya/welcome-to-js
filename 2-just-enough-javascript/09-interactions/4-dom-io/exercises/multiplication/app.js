import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---

  let left = readNumber('left');

  let right = readNumber('right');

  console.log(left, right);

  // --- multiply the numbers ---
  // --- create a message ---
  let result = 'okay, ' + left + ' and ' + right;

  // --- display the message ---

  displayString('product', result);
});
