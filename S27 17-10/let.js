/*
let
-----------
block scoped Statement
 */

/*
var
-----------
function scoped Statement
if we declare any variable with var scope Statement in global scope then that variable
 */

function f1() {
  let city = "Hydrabad";
  console.log(city);
}
f1();

function f2() {
  function innerFunc() {
    console.log("I'm innerFunc");
  }
  innerFunc();
}

f2();

function f3() {
  if (true) {
    let gav = "Nagpur";
  }
  console.log(gav);
}

console.log(gav);
