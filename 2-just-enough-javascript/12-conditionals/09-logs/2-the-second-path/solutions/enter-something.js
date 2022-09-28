'use strict';

let input = prompt('enter something');

let path = 0;
if (input === null) {
  path = 1;
} else {
  path = 2;
}

console.log(path);
