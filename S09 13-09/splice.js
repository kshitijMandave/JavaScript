/*

Splice:
-------
it is used to add new element to any specific index &
remove the element from any specific index of array

*/

var arr = [10, 20, 30, 5, "ks", "Raj", "ram"];

arr.splice(4, 1); //syntax For remove
// Start number-

console.log("---Here we are removing")

console.log(arr);

console.log("------------------------")

console.log("---Here we are replaceing")

arr.splice(1,0,"Sagar"); //syntax For replace
console.log(arr);