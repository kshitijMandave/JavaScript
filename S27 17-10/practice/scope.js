// Global Scope

// Function Scope
function fn() {
  var b = 10;
  console.log(c);
  function fNew() {
    console.log(b);
    let c = 30;
  }
  fNew();
}
// console.log(b);

// Block Scope
{
  var a = 10;
}

console.log(a);
