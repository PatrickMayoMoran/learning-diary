let names = ["sam", "joe", "mayo"];
let upperCaseNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] == "joe") {
    continue;
  }

  let upperName = names[index].toUpperCase();
  upperCaseNames.push(upperName);
  index += 1;
}

console.log(upperCaseNames);
