/*

Symbols
--------
Symbols are used to create object properties
for example: when you want to assign a unique identifier to an object.

*/

const mySymbol = Symbol();

const myObject = {
  [mySymbol]: 'Hello World'
};

// Private property is not enumerable
console.log(Object.keys(myObject));
// expected output: []