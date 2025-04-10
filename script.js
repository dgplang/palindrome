// The Algorithm Challenge
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that’s spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing
// Note: You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything lower case in order to check for palindromes.
// Strings can be passed with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

function palindrome(str) {

    let cleanedString = ""

    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    cleanedString = str.replace(/[\W_]/gi, '').toLowerCase()

    // Step 2. Use the following methods: split, reverse and join on the string
    // Compare to see if the original string and string after the operations are strictly equal
    reversedString = cleanedString.split('').reverse().join('')

    // Step 3. Check if cleanedString is strictly equals to reversedString and return a Boolean
    return cleanedString === reversedString

}

// Example of palindrome
newStr = "A man, a plan, a canal. Panama"

console.log(palindrome(newStr))