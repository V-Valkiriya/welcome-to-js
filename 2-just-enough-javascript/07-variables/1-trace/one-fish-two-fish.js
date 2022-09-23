// #todo

'use strict';

// declare and init: phrase = ' ';
let phrase = ' ';

// read: phrase = ' ';
// assign: phrase = 'one fish;
phrase = 'one' + phrase + 'fish';

// read: phrase = 'one fish;
// assign: phrase = 'one fish two';
phrase = phrase + ' two';

// read: phrase = 'one fish two';
// assign: phrase = 'one fish two fish';
phrase = phrase + ' fish';

console.log(phrase); // 'one fish two fish'
