function returnArray() {
  return [
    function newArr() {
      console.log("Hello!I'm Inside function");
    },
  ];
}
returnArray()[0]();
