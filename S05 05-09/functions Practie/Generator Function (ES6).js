// Generator Function: A function that can pause and resume its execution
function* generateNumbers() {
  yield 1; // Pauses and returns 1
  yield 2; // Pauses and returns 2
  yield 3; // Pauses and returns 3
}

const generator = generateNumbers(); // Creates a generator object
console.log(generator.next().value); // Logs 1, resumes and pauses at the next yield
console.log(generator.next().value); // Logs 2, resumes and pauses at the next yield
console.log(generator.next().value); // Logs 3, resumes and finishes
