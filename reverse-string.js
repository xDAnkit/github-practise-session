/**
 * @description Method to reverse a string
 * @param {String} str
 * @returns {String}
 *
 * Step 1   - Handle edge case or Split the string
 * Step 2   - Declare a local variable
 * Step 3   - Iterate a loop to reverse string
 * Step 4   - Join the character form the last i.e., result = current + result
 * Step 5   - Return result
 */
const reverseString = (str) => {
  if (!str && typeof str !== "string") {
    return "Please enter a valid input";
  }

  const splittedStr = str.split("");
  let result = "";

  for (let i = 0; i < splittedStr.length; i++) {
    result = splittedStr[i] + result;
  }
  return result;
};

console.log(reverseString("ankit"));
console.log(reverseString("tarun"));
