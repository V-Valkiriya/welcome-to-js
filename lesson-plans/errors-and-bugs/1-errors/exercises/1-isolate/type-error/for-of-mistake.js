'use strict';

console.log('--- in execution phase ---');

/*
  environment: browser Chrome

  name: TypeError
  message: maxNumber is not iterable

  location: 22

  life cycle: execution

  the mistake: 6 can`t be broken down into numbers 1-5

  the fix(es): change value
*/

const maxNumber = '012345';

for (const i of maxNumber) {
  console.log(i); // 0, 1, 2, 3, 4, 5
}
