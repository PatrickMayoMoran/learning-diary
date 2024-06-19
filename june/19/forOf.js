"use strict"
// array with 3 elements and two empty slots
let array = [1, "Tiny", , , undefined];
array[-1] = "Cat"; // not an element, object property

for (let value of array) {
  console.log(value);
}
// will log 1, "Tiny", undefined, undefined, and undefined
// Iterating over every slot in the indices of the array, dense or sparse
