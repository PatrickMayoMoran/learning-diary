let names = ["sam", "joe", "mayo"];
let upperCaseNames = [];
let index = 0;

while (index < names.length) {
  let upperName = names[index].toUpperCase();
  upperCaseNames.push(upperName);
  index += 1;
}

console.log(upperCaseNames);
