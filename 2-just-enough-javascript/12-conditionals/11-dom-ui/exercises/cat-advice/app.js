import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let one = readBoolean('likes-cats');
  let two = readBoolean('is-allergic');
  let three = readBoolean('owns-one');

  // --- generate good advice ---

  let message = 'read your advice';

  // --- display advice for the user ---
  displayString('custom-advice', message);
});
