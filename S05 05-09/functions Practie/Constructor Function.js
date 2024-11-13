// Constructor Function: Used to create objects with similar properties
function Person(name, age) {
  this.name = name; // Assigns the 'name' parameter to the object
  this.age = age; // Assigns the 'age' parameter to the object
}

const john = new Person("John", 30); // Creates a new 'Person' object
console.log(john.name); // Logs "John", which is the name of the object
console.log(john.age);
