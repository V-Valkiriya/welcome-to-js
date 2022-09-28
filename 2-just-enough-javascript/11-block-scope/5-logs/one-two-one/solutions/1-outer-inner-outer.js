'use strict';

let a = '1, 2, 3';
console.log(a);

{
  a = a + ', 4';
  console.log(a);
}

console.log(a);
