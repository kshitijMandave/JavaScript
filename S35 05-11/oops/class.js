class User {
  name;
  phone;
  static city;
  constructor(name, phone, city) {
    this.name = name;
    this.phone = phone;
    this.city = "HYD";
  }
}

let emp = new User("Kshitij", 7038342551);

console.log(emp);