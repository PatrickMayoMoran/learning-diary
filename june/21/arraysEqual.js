function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
}

console.log(arraysEqual([1,2,3],[1,2,3]));
console.log(arraysEqual([1,4,3],[1,2,3]));

