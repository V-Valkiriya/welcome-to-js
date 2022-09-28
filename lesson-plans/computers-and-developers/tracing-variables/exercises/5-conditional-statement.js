'use strict';

let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

let b = 'Hello ' + a + ', your name is ';

if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

console.log(b); // 'Hello Ewin, your name is perfect'

let a = 'Tugba';

let b = 'Hello ' + a + ', your name is ';

if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

console.log(b); // 'Hello Tugba, your name is long'

let a = 'Olesandra';

let b = 'Hello ' + a + ', your name is ';

if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

console.log(b); // 'Hello Olesandra, your name is perfect'
