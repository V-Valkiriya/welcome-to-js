'use strict';

let input = null;
while (input === null || input.length !== 10) {
  input = prompt('enter something with 10≠` characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);

let every = null;
while (every === null || every !== 'every') {
  every = prompt('enter every');
}

let thing = null;
while (thing === null || thing !== 'thing') {
  thing = prompt('enter thing');
}

let sayd = every + thing;

alert(sayd);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
