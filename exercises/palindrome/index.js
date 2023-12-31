// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   //solution 1 
//    const reversed = str.split('').reverse().join('')
//     return str == reversed;

    //solution 2 
    const reversed = str.split('')
    return reversed.every((item, index) => {
      return item == reversed[reversed.length - (index + 1)]
    })
}

module.exports = palindrome;
