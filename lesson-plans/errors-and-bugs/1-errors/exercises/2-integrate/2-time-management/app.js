import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: browser Chrome

  name: SyntaxError
  message: Cannot use import statement outside a module

  location:

  life cycle:

  the mistake:

  the fix(es):
*/

whenFormDataChanges('sleep-info', () => {
  console.log('--- form data changed ---');

  // --- read user input ---

  let isTired = readBoolean('tired');

  let hasTime = readBoolean('free-time');

  // --- generate advice ---

  let advice = '';
  if (isTired && hasTime) {
    advice = 'Take a nap!';
  } else if (!isTired || hasTime) {
    advice = 'Study some flashcards.';
  } else if (isTired || !hasTime) {
    advice = 'Make some coffee.';
  } else if (!isTired || !hasTime) {
    advice = 'Have a great day!';
  }

  // --- display the advice ---

  displayString('advice-area', advice);
});
