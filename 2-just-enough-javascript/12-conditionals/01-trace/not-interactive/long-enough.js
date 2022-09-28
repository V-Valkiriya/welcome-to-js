// #todo

'use strict';

let word = 'a';
// let word = 'be'; // 'a short word';
// let word = 'sea'; // 'a perfect word';
// let word = 'frog'; // 'a perfect word';
// let word = 'apple'; // 'a long word';
// let word = 'banana'; // 'a long word';

let message;
if (word.length <= 2) {
  message = 'a short word';
} else if (word.length < 3) {
  // why is this path unreachable?
  message = 'unreachable path!';
} else if (word.length < 5) {
  message = 'a perfect word';
} else {
  message = 'a long word';
}

console.log(message); // 'a short word';
