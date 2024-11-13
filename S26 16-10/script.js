function returnArr(f) {
  return [
    "Kshitij",
    function newfunction() {
      console.log("Hello! I'm Function");
    },
  ];
}

let arr = returnArr();
console.log(arr);
arr[1]();
