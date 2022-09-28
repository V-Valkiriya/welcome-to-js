import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let does = readString('text');
  let include = readString('query');
  let case = readBoolean('sensitive')
  // --- do the search ---

  // --- display the search results ---
  displayString('search-result', message);
});
