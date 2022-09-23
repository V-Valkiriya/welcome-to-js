// #todo

'use strict';

let word = '';
// let word = 'a'; // 'word is too short';
// let word = 'be'; // 'word is too short';
// let word = 'eat'; // 'not eary :('
// let word = 'ear'; // 'eary word!'
// let word = 'peat'; // 'not eary :('
// let word = 'bear'; // 'not eary :('
// let word = 'early'; // 'eary word!'
// let word = 'burly'; // 'not eary :('
// let word = 'pearly'; // 'eary word!'
// let word = 'poultry'; // 'not eary :('

let message;
if (word.length >= 3) {
  if (word.includes('ear')) {
    message = 'eary word!';
  } else {
    message = 'not eary :(';
  }
} else {
  message = 'word is too short';
}

console.log(message);
