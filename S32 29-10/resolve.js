let promiseObj = new Promise(function (resolve, reject) {
  resolve(100);
});

console.log(promiseObj);

/* What is sucess data?
------------------------
which we store data using resolve function inside promiss object */

let promiseObj1 = new Promise(function (resolve, reject) {
  resolve({
    name: "Kshitij",
    phone: 7038342551,
  });
});

console.log(promiseObj1);
