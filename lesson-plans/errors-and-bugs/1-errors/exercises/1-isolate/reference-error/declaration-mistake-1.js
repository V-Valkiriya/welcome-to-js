'use strict';

console.log('--- in execution phase ---');

/*
  environment: Browser Chrome

  name: ReferenceError
  message: welf is not defined

  location: 20.6

  life cycle: exeution

  the mistake: missing let

  the fix(es): declare let before init welf
*/

 let welf = 'ingrad';

console.log(welf);
