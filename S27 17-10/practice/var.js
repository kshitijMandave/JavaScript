var city = "HYD";

console.log(city);

console.log("***here Function");

function fn() {
  console.log(city);
  function fnew() {
    console.log(city);
  }
  fnew();
}

fn();
console.log("***After Function");
console.log(city);
