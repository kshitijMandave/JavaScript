var employee = {
    userName: "Kshitij",
    id: 12,
    city: "Nagpur",
    State: "Maharashtra"
};

console.log(employee['userName']);

console.log(employee);

console.log("------------------------------")
// how to access sigle key or userName ?

// threre is two ways to print with dot notation 

// 1st use console and object.keyName
console.log(employee.userName);

// 2nd store the object and key in variable and print it.

var uName = employee.userName; // with notation . it's a dynamic way
console.log(uName); 


var cityName = employee["city"];
console.log(cityName);

var StateName = employee["State"];
console.log(StateName);

console.log("------------------------------")

console.log("Insert Operation");

employee.phone = 7038342551;
//it will always insert in last of the object.

console.log(employee)

console.log("------------------------------")

console.log("Update Operation");

employee.city = "Hydarabad";
//it will upsert the object key value as a Hydarabad

console.log(employee)

console.log("------------------------------")

console.log("Delete Operation");

delete employee.id;
console.log(employee);