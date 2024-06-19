"use strict"
// array with 3 elements and two empty slots
let array = [1, "Tiny", , , undefined];
array[-1] = "Cat"; // not an element, object property

for (let key in array) {
  console.log(array[key]);
}
// will log 1, "Tiny", undefined, and "Cat"
