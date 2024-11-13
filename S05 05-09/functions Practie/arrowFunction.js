// Arrow Function: A shorter syntax for writing functions
/* A function without function keyword and function name */

const sayHi = (a, b) => {
  // Takes two parameters and returns their sum
  return (sum = a + b);
};

console.log(sayHi(10, 20)); // Call the function and print the result, prints 15
