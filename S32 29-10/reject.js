let rejPromise = new Promise(function (resolve, reject) {
  reject("Hi, I'm reject");
});

console.log(rejPromise);
