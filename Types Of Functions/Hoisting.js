// when a variable is initialized before it declaration is called hositing

console.log(name); // Output: undefined
var name = "John";

// Equivalent to:

var name;
console.log(name); // Output: undefined
name = "John";