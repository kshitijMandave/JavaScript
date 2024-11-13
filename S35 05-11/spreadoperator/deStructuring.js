const info = {
  empName: "Kshitij",
  gender: { male: "Male" },
  cmp: { cmpName: "InfraTech", Salary: 27000, package: 4.2 },
};

let {
  cmp: { cmpName },
} = info;

console.log(cmpName);
