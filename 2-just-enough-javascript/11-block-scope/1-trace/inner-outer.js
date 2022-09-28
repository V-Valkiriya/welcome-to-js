// #todo

'use strict';

// declare and init: greeting = 'hello';
let greeting = 'hello';

{
  // declare and init: newGreeting = 'bye';
  let newGreeting = 'bye';
  // read: newGreeting = ''bye';
  // assign: greeting = 'bye';
  greeting = newGreeting;
}

console.log(greeting === 'bye'); // true
