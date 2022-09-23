// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let firstName = readString('fn');

  console.log(firstName);

  let lastName = readString('ln');

  console.log(lastName);

  // --- create a message ---

  let greeting = 'Hello ' + firstName + ' ' + lastName + '!';

  // --- display the message ---

  displayString('greet-field', greeting);
});
