// Higher-Order Function: A function that takes another function as an argument
function higherOrder(fn) {
  console.log("About to call the passed function..."); // Logs a message
  fn(); // Calls the function passed as an argument
}

higherOrder(function () {
  console.log("This is the passed function!"); // Logs "This is the passed function!"
});
