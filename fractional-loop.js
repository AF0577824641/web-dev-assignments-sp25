function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
const input = process.argv[2];
console.log("The factorial of " + input + " is " + factorialize(input));
factorialize(input);
