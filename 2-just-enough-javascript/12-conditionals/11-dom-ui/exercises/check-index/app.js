import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let does = readString('text');
  let character = readString('character');
  let number = readNumber('i');

  // --- check the index ---
  let message = does + ' ' + character + ' ' + number + ' ?';

  // --- display the search results ---
  displayString('search-result', message);
});
