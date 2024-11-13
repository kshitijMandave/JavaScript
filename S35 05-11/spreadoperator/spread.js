const cmp = {
  cmpName: "snfi",
  salary: 24000,
};

let user = {
  name: "Kshitij",
  city: "HYD",
  phone: 7038342551,
  ...cmp,
};

console.log(user);
