// it is a technique to use properties from one object to other object

class Personal {
  name = "Kshitij";
  id = 123;
  email = "kshitij.mandwe@gmail.com";
}

// here we are inheriting propertis with extends

class Address extends Personal {
  city = "Pune";
  state = "Maharashtra";
  pincode = 441802;
}

console.log(Address.pincode);
