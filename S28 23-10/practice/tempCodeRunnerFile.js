let info = {
  firstName: "kshitij",
  lastName: "Mandave",
  getname() {
    console.log(this.firstName, " ", this.lastName);
  },
};

info.getname();
