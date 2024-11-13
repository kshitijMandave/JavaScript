let user = {
  name: "kshitij",
  welcomeMeg: function greet() {
    console.log(`${this.name}, Welcome to our website`);
    console.log(this);
  },
};
user.welcomeMeg(this);
console.log(this);
