function countVowels(str) {
  // Count the number of vowels in a given string.
  const count = str.match(/[aeiou]/gi)?.length || 0;
  return count;
}
// If not string is not inputed, prompt to input string.
if (!process.argv[2]) {
  console.log("Please provide a string as input.");
} else {
  // If string is inputed, print message with the number of vowels in the string.
  console.log(
    `The number of vowels in "${process.argv[2]}" is ${countVowels(
      process.argv[2]
    )}.`
  );
}
