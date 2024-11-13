function f1(callback) {
  console.log("I'm f1");
  callback();
}

function f2() {
  console.log("I'm f2");
}

f1(f2);

//******************************** */

// Callback Function: A function passed to another function to be called later
function fetchData(callback) {
  console.log("Fetching data..."); // Logs "Fetching data..."
  callback(); // Calls the callback function
}

fetchData(function () {
  console.log("Data fetched successfully!"); // Logs "Data fetched successfully!"
});
