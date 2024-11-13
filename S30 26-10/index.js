/* to acces propertis and method in class we always use this keyword */
class products {
  productName = "Trimmer";
  price = 100;
  ratig = 4.47;

  display() {
    console.log(this.productName, this.price, this.ratig);
  }
  changePrice(newPrice) {
    this.price = newPrice;
    this.display();
    return this.price;
  }
}

var p1 = new products();
var p2 = new products();

console.log(p1);

p2.productName = "Phone";
p2.price = 20000;
p2.ratig = 4.7;

console.log(p2);
