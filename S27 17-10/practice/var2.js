/*
var
-----
we can access var variable  inside the funtion, no matter how many blocks we hav
** but if we have function inside function and inner function have variable with var then we can not access it inside parent function */

function fn() {
  //function Scope
  if (true) {
    var city = "HYD"; //blcok Scope
  }
  console.log(city);
}
