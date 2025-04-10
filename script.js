// A palindrome is a word or sentence that’s spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing
// Note: It is necessary to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything lower case in order to check for palindromes.
// Strings can be passed with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

function palindrome(str) {

    let cleanedString = ""

    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    cleanedString = str.replace(/[\W_]/gi, '').toLowerCase()

    // Step 2. Use the following methods: split, reverse and join on the string
    reversedString = cleanedString.split('').reverse().join('')

    // Step 3. Check if cleanedString is strictly equal to reversedString and return a Boolean
    return cleanedString === reversedString

}

// Example of palindrome
newStr = "A man, a plan, a canal. Panama"

console.log(palindrome(newStr))