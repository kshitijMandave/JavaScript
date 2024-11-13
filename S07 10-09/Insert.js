/*
Object
-------
it is just a collection of properties.

properties
-----------
it's key: val pair


class
-------


*/


/* Insert */

var emloyee = {
    userName: "Ram Mallani",
    id: 102,
    city: "Sakoli",
}

var empName = emloyee.userName
console.log(empName);

var empId = emloyee.id
console.log(empId);

var empCity = emloyee.city
console.log(empCity);

var emName = emloyee["userName"];
console.log(emName);

console.log("----------------");


emloyee.gmail = "ram.mallani@gmail.com";
console.log(emloyee);

console.log("----------------");

emloyee["gender"] = "Male";
console.log(emloyee);