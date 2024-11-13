// Recursive Function: A function that calls itself until a condition is met
function countdown(number) {
  if (number > 0) {
    console.log(number); // Logs the current number
    countdown(number - 1); // Calls itself with a smaller number
  } else {
    console.log("Blast off!"); // Logs "Blast off!" when the countdown reaches 0
  }
}

countdown(5); // Starts the countdown from 5
