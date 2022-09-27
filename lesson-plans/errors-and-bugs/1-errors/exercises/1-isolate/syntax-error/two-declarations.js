'use strict';

console.log('--- in execution phase ---');

/*
  environment: browser Chrome

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  location: 22

  life cycle: execution

  the mistake: let was declared

  the fix(es): delete let second time
*/

let tree = 'oak';

tree = 'birch';
