let promissObj = new Promise(function (resovle, reject) {
  resovle("ram");
});
console.log(promissObj);

let newPromise = new Promise(function (resovle, reject) {
  resovle([{ name: "Kshitij" }, { Name: "Pratik" }]);
});

console.log(newPromise);

let thrdObj = new Promise(function (resovle, reject) {
  resovle("Hii I'm Resolve Displaying by thrdPromise Obj");
});

console.log(thrdObj);
