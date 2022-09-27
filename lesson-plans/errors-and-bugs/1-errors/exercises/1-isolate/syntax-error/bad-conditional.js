

'use strict';

console.log('--- in execution phase ---');


/*
  environment: browser Chrome

  name: SyntaxError
  message: Unexpected token

  location: 27

  life cycle: execution

  the mistake: there isn`t if

  the fix(es): add if after else
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


