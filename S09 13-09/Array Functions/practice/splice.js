var arr = [10, 20, 30, 40, 50, 6, 17, 18, 19, 20, 30, 78, 80];

console.log("here we are removing");
arr.splice(4, 1);
console.log(arr)

console.log("------------------------");

console.log("here we are adding");
arr.splice(2, 1, "Ram");
console.log(arr);