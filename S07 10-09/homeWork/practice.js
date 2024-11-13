var user = {
    uName: "Kshitij",
    uId: 123,
    city: "Hydrabad"
}

console.log(user);

// Accessing
var userName = user.uName;
console.log(userName);

// interst

user.email = "kshitij.mandave@gmail.com";

console.log(user);

user.uId = "457";

console.log(user);

// Deleteing id with dlete DataType.
delete user["uId"];
console.log(user);