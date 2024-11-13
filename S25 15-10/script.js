/*
(...)
Spread Operator
--------
it is use to copy properties

*/

let obj = {
  name: "sager",
  city: "hyd",
  gender: "male",
};

var obj2 = {
  ...obj,
  phone: 7038342551,
  name: "Kshitij", // it will override the name property.
};

console.log(obj);

console.log("--------------");
console.log("After Spread");

console.log(obj2);
