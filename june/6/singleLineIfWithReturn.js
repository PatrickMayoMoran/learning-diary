function oneLineReturn(word) {
  let newString = word.slice(0,word.length - 1);
  if (word === "Mayo") return word;
  return oneLineReturn(newString);
}

console.log(oneLineReturn("Mayonnaise"));
