'use strict';

let a = '1';

{
  a = a + ', 2';
}

{
  a = a + ', 3';
}

{
  a = a + ', 4';
}

console.log(a);
