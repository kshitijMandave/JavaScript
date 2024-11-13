let prices = [10, 20, 50, 20];
let MaxItem = prices.reduce(getMax);
let totalPrice = prices.reduce(sum);
let MinItem = prices.reduce(getMin);

console.log(totalPrice);
console.log(MaxItem);
console.log(MinItem);

// function for Add
function sum(accumulator, element) {
  return accumulator + element;
}

// function for Max Item Value
function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

// function for min Value
function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
