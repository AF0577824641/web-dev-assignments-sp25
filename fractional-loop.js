function fractional(num) {
  // If inputed number is negative, factorial is not defined
  if (num < 0) return -1;
  // If the number is 0, factorial is 1
  else if (num == 0) return 1;
  else {
    // Recursive call to calculate factorial
    return num * fractional(num - 1);
  }
}
// Retrives the input from the command line
const input = process.argv[2];
// If no input prompt to input a number
if (!input) {
  console.log("Please provide a number.");
  return;
}
// Print the factorial of the input
console.log(`The factorial of ${input} is ${fractional(input)}`);
