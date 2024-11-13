let user = {
  firstName: "Rakesh",
  lastName: "Lanjewar",
  gender: {
    A: "male",
    B: "Female",
  },
};
let {
  gender: { A },
} = user;

console.log(A);
