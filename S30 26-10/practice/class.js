class info {
  name;
  Phone;
  static city;

  constructor(name, Phone) {
    this.name = name;
    this.Phone = Phone;
    this.city = "Hydrabad";
  }
}

const ranjeet = new info("Ranjeet", 703834251);

console.log(ranjeet);
