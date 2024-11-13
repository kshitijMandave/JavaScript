/*
let
-----
if we declared any variable with let we can
*/

let city = "Hydrabad";

function fn() {
  console.log(city);
  function newFn() {
    console.log(city);
  }
  newFn();
}

console.log(city);
