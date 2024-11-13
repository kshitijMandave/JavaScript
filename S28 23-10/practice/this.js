let info = {
  firstName: "Kshitij",
  lastName: "Mandave",
  getname() {
    console.log(this.firstName + " " + this.lastName);
  },
};
// here this is refers to name of object like info.firstName

info.getname();
