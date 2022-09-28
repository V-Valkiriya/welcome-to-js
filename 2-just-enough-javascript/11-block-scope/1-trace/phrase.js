// #todo

'use strict';

// declare and init: phrase = '';
let phrase = '';

{
  // declare and init: word = 'hello';
  let word = 'hello';
  // read: pharse = '';
  // read word = 'hello';
  // assign: phrase = 'hello';
  phrase = phrase + word;
}

{
  // declare and init: word = 'world';
  let word = 'world';
  // read: word = 'world';
  // read: phrase = 'hello';
  // assign: phrase = 'hello world;
  phrase = phrase + ' ' + word;
}

console.log(phrase === 'hello world'); // true
