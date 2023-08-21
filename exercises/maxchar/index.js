// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const reversedObj = {};
  let max = 0;
  let maxChar = "";

  str.split("").forEach((char) => {
    if (reversedObj[char]) {
      reversedObj[char]++;
    } else {
      reversedObj[char] = 1;
    }
  });

  for (let char in reversedObj) {
    if (reversedObj[char] > max) {
      maxChar = char;
      max = reversedObj[char];
    }
  }

  return maxChar;
}

module.exports = maxChar;
