function f1() {
  console.log("F1 is Called");
}

function fn(f) { // here we passed parameter.
  console.log("Fn is Called");
  f(); // here we are calling function
}

fn(f1); // passing argument as a function is called callback function.