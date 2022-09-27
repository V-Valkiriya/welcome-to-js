

'use strict';

console.log('--- in execution phase ---');


/*
  environment: browser Chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  location: 25

  life cycle: execution

  the mistake: incorrect location variable and value

  the fix(es): swap them
*/

let isHappy = false;

isHappy = true;


