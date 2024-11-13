var Student = {
    name: "Kshitij",
    phone: 8080392508
}

console.log("-----Here we are Accessing with dot");
console.log(Student.phone);
console.log("-----Here we are Accessing with Bracket");
console.log(Student["name"]);

console.log("-----Here I'm adding new property Email");

Student.email = "rammahajan@gmail.com";

console.log(Student);

Student.phone = 7038342551;

console.log("-----Here I'm Updating Number");

console.log(Student);

console.log("-----Here I'm Deleting name");

delete Student.name;
console.log(Student);