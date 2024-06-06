let arrow = (dog, mouse) => dog + mouse;
// single line arrow functions implicitly return last evaluated value

console.log(arrow(3,5)); // logs 8

let pfeil = kitty => console.log(kitty);
// arrow functions with only one parameter don't need parentheses around that parameter
pfeil("Tiny!") // logs "Tiny!"

let flecha = meow => {
	console.log(meow);
	return meow + "!!!";
}
// multiline arrow functions do need an explicit return
let catSound = flecha("meow");
console.log(catSound); // logs "meow!!!"
