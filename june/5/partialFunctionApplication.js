function addPunctuation(punctuation) {
  return function(word) {
    return word + punctuation;
  }
}

let addExclamation = addPunctuation("!!!");
let makeQuestion = addPunctuation("?");

console.log(addExclamation("Tiny Cat"));
console.log(makeQuestion("Will I be okay"));
