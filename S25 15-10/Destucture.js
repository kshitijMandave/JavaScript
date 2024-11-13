/*

Destructuring means
--------------------
seperating property from object.
we can use directly property without object name

*/

let data = {
  productName: "Mackbook Pro",
  price: 240000,
  rating: 4.7,
  brandName: "Apple",
};

let { rating } = data;

console.log(rating);
