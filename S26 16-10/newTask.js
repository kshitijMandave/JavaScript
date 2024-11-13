let obj = {
  name: "Kshitij",
  phone: 7038342551,
  arr: ["Kshitij", 7038342551, "HYD"],
};

function returnObj() {
  console.log(obj);
  return obj;
}

returnObj();

// ***************************

function retnArr() {
  return [
    "Kshitij",
    "Ram",
    function sayHi() {
      console.log("Hii");
    },
  ];
}

let newArrray = retnArr()[2]();
console.log(newArrray);
