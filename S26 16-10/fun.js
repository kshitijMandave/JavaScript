function returnArr() {
  function sayHi() {
    console.log("Hi! I'm Inside the function");
  }
  return ["Kshitij", 9, 4, sayHi];
}
returnArr()[3](); // for call function Inside array

// for print hole return statement
let returningArr = returnArr();
console.log(returningArr);
