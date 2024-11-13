let fn = () => {
  console.log("I'm fn");
};

let f1 = (callBack) => {
  console.log("I'm f1");
  callBack();
};

f1(fn);
