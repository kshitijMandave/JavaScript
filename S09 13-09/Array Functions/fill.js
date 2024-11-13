/*

fill:
------
It is uesed to fill specific element value from the array with new Element. 
method overwrites the original array.

Syntax : array.fill(value, start, end)

*/

var arr = ["array", "String", "functions", "Methods"];

arr.fill("Kshitij", 2, 3+1);// This will replace last two elements

console.log(arr);