/*
Constructor
------------
it is a special method.
it usdd to initialize defualt values of the properties.

static
---------
to make 


*/

class User {
  name;
  age;
  static city;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.city = "HYD";
  }
}

var mrRaj = new User("Raj", 29);
console.log(mrRaj);

var mrSagar = new User("Sagar", 28);
console.log(mrSagar);
