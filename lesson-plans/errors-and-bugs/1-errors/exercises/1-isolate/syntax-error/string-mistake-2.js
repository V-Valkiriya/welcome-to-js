

'use strict';

console.log('--- in execution phase ---');


/*
  environment: browser Chrome

  name: SyntaxError
  message: Unexpected string

  location: 23

  life cycle: execution

  the mistake: there arent +

  the fix(es): add +
*/

const quotesInQuotes = 'remind yourself' + 'i can do this!' + ' at least once a day';


