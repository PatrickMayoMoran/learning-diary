// array with 3 elements and two empty slots
let array = [1, "Tiny", , , undefined];
array[-1] = "Cat"; // not an element, object property

array.forEach(elem => console.log(elem));
// will log 1, "Tiny", and undefined
