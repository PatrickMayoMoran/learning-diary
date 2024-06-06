console.log(!false) // true
console.log(!undefined) // true
console.log(!null) // true
console.log(!NaN) // true
console.log(!0) //true
console.log(!'') // true

console.log(![]) // false, because even an empty array is truthy
console.log(!{}) // false, because even an empty object is truthy
