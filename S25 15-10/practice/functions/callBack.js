// f1 is a simple function that logs a message to the console
function f1() {
  console.log("f1 is Called");
}

// f2 is a higher-order function because it accepts a function as an argument (f)
function f2(f) {
  console.log("f2 is Called"); // This logs a message when f2 is called
  f(); // The function passed (f1) is called here, executing f1 and logging its message
}

// Here, we are passing f1 as a function (not calling it) to f2
// f2 will execute f1 later, making f1 a callback function
f2(f1);
