/* For Each
it is a predefined function.
we use it to access each element of Arry  */

let arr = [
  { name: "Kshitij", id: 1245, phone: 7038342551 },
  { name: "Pradeep", id: 1245, phone: 7038342551 },
  { name: "Shyamji", id: 1245, phone: 7038342551 },
];
arr.forEach((element, index) => {
  console.log(element, " ", index);
});
