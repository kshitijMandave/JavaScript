/*
var
-----------
function scoped Statement
if we declare any variable with var scope Statement in global scope then that variable
 */

var city = "Hydrabad";

function f1() {}

function f2() {
  function innerFunc() {
    console.log("I'm innerFunc");
  }
  innerFunc();
}

f2();

/*
const
-----------
block scoped Statement
 */
