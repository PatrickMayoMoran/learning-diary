let numbers = [[1,3,5], [7,8,9], [2,4,6,8]];
let products = numbers.map(sub => {
  return sub.reduce((acc, num) => acc * num);
});

console.log(products);
