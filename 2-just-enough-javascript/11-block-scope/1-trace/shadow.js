// #todo

'use strict';

// declare and init: greeting = 'hello';
let greeting = 'hello';

{
  // declare and init: greeting = 'hello';
  let greeting = 'hello';
  // assign: greeting = 'bye';
  greeting = 'bye';
  console.log(greeting); // 'bye'
}

console.log(greeting === 'hello'); // true
