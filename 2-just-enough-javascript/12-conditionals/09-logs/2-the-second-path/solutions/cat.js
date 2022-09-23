'use strict';

let input = prompt('enter "cat"');

let path = 0;
if (input === 'cat') {
  path = 2;
} else if (input === null) {
  path = 1;
} else {
  path = 3;
}

console.log(path);
