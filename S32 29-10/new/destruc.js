let obj = {
  name: "Kshitij",
  gender: {
    male: "Male",
    female: "Female",
  },
};

let {
  name,
  gender: { male },
} = obj;

console.log(name);
console.log(male);
