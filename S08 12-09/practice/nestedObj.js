var products = {
  brand: "Apple",
  price: 1246679,
  Rating: {
    rate: 4.8,
    count: 12456,
  },
};

console.log(products.Rating.count);

console.log(products["Rating"]["rate"]);

products.Rating.max = "100";

console.log(products);

console.log("---------------------");

delete products.Rating.max;

console.log(products);