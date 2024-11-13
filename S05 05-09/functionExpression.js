/*
function Expression:
We cannot use anonymous function directly. We use this function with the combination of some other concepts.
We can assign anonymous function to any variable. 
*/

var f1 = function (p1, p2) {
  var p1 = 10;
  var p2 = 20;
  return p1 + p2; // it can have return function.
};

console.log(f1());

// we call anonymous function or fuction without name with assigned variable all the portion is called function Expression.
