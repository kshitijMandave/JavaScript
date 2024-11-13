var arr = [10, 20, 30, 40, 50, 6, 0, 4, 70, 8, 5];

let newArr = arr.filter((ele) => ele > 6);
console.log(newArr);

let newArrWithReturn = arr.filter((num) => {
  return num > 3;
});

console.log(newArrWithReturn);
