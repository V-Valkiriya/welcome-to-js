'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: 20:13

  life cycle: execution

  the mistake: there isn`t tomatoes before console.log

  the fix(es): move tomatoes before console.log
*/

let tomatoes = 'fresh';

console.log(tomatoes);


