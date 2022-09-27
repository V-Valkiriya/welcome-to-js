'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name:
  message: 'ReferenceError: Cannot access 'isValidUserName' before initialization'

  location: 24

  life cycle: before 

  the mistake: Cannot access 'isValidUserName' before initialization

  the fix(es): Move let isValidUserName to a loop
*/

const userName = 'chiobin';
let isValidUserName;
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
