let arr = ["Kshitij", 123, "Ram", "Hydrabad"];
let arrlength = arr.length;
console.log(arrlength); // for Legnth
console.log(arr[1]); // print arr with index no

let arrString = arr.toString() // convert array into Sting
console.log(arrString); // to prin that converted string

let useAt = arr.at(2) //at returns indexed element
console.log(useAt);

arr.push("Hii"); // Adds element at array starting postition and returns a new arr
console.log(arr);

console.log("---------Removed here---------");

arr.pop(); // removes element of array ending position 
console.log(arr);

// To join Two Arrays
let myBoys = ["Kshitij", "Rakesh", "Raj", "Hemraj"];

let myGirls = ["Khushi", "Yash", "Guddy"]

let conArr = myBoys.concat(myGirls);
console.log(conArr);