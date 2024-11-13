let obj1 = {
  name: "Salman",
  phone: 70381342659,
  city: "HYD",
};

let obj2 = {
  ...obj1,
  name: "Kshitij",
  email: "Kshitij.mandwe@gmail.com",
};
console.log(obj1);

console.log("*****After Spread******");

console.log(obj2);
