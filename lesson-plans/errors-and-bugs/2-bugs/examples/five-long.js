'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line: 21
    why: wrong operator, delete =
    trying: don`t work

      experiment 2
    line: 28
    why: wrong operator, delete =
    trying: work

*/

let input = prompt('enter something 5 characters long');

if (input === null) {
  alert(':(');
} else if (input.length < 5) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else  {
  alert('perfect');
}
