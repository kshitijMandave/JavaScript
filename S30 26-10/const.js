class Toyata {
  model;
  price;

  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

var fotuner = new Toyata("fotuner", 240000);

console.log(fotuner);
