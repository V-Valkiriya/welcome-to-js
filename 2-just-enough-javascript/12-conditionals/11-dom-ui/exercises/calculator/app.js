import {
  whenFormDataChanges,
  readNumber,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('inputs', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let left = readNumber('left');
  let right = readNumber('right');

  let operator = readString('operator');

  // --- calculate the result ---

  let result = left + operator + right;

  // --- display the result ---
  displayString('result', result);
});