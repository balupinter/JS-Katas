// Beginner Katas

// 1. addTwoNumbers(a, b)
// Returns the sum of two numbers.
function addTwoNumbers(a, b) {
    // Your code here
    return 0; // Placeholder
}
addTwoNumbers.testCases = [
    { input: [1, 2], expected: 3, description: 'should return 3 for 1 and 2' },
    { input: [-1, 5], expected: 4, description: 'should return 4 for -1 and 5' },
    { input: [0, 0], expected: 0, description: 'should return 0 for 0 and 0' },
];

// 2. reverseString(str)
// Reverses a given string.
function reverseString(str) {
    // Your code here
    return ''; // Placeholder
}
reverseString.testCases = [
    { input: ['hello'], expected: 'olleh', description: 'should reverse "hello" to "olleh"' },
    { input: ['world'], expected: 'dlrow', description: 'should reverse "world" to "dlrow"' },
    { input: ['a'], expected: 'a', description: 'should return "a" for "a"' },
    { input: [''], expected: '', description: 'should return empty string for empty string' },
];

// 3. isEven(num)
// Checks if a number is even.
function isEven(num) {
    // Your code here
    return false; // Placeholder
}
isEven.testCases = [
    { input: [2], expected: true, description: 'should return true for 2' },
    { input: [3], expected: false, description: 'should return false for 3' },
    { input: [0], expected: true, description: 'should return true for 0' },
    { input: [-4], expected: true, description: 'should return true for -4' },
];

// 4. findMax(arr)
// Finds the maximum number in an array.
function findMax(arr) {
    // Your code here
    return 0; // Placeholder
}
findMax.testCases = [
    { input: [[1, 2, 3]], expected: 3, description: 'should return 3 for [1, 2, 3]' },
    { input: [[-1, -5, -2]], expected: -1, description: 'should return -1 for [-1, -5, -2]' },
    { input: [[10]], expected: 10, description: 'should return 10 for [10]' },
    { input: [[5, 1, 9, 2]], expected: 9, description: 'should return 9 for [5, 1, 9, 2]' },
];

// 5. countVowels(str)
// Counts the number of vowels in a string. (a, e, i, o, u, case-insensitive)
function countVowels(str) {
    // Your code here
    return 0; // Placeholder
}
countVowels.testCases = [
    { input: ['hello'], expected: 2, description: 'should return 2 for "hello"' },
    { input: ['aeiou'], expected: 5, description: 'should return 5 for "aeiou"' },
    { input: ['rhythm'], expected: 0, description: 'should return 0 for "rhythm"' },
    { input: ['HELLO'], expected: 2, description: 'should return 2 for "HELLO"' },
];

// 6. celsiusToFahrenheit(celsius)
// Converts Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32
function celsiusToFahrenheit(celsius) {
    // Your code here
    return 0; // Placeholder
}
celsiusToFahrenheit.testCases = [
    { input: [0], expected: 32, description: 'should return 32 for 0 Celsius' },
    { input: [100], expected: 212, description: 'should return 212 for 100 Celsius' },
    { input: [-10], expected: 14, description: 'should return 14 for -10 Celsius' },
];

// 7. getAreaOfRectangle(length, width)
// Calculates the area of a rectangle.
function getAreaOfRectangle(length, width) {
    // Your code here
    return 0; // Placeholder
}
getAreaOfRectangle.testCases = [
    { input: [5, 10], expected: 50, description: 'should return 50 for length 5 and width 10' },
    { input: [0, 10], expected: 0, description: 'should return 0 for length 0' },
    { input: [7, 7], expected: 49, description: 'should return 49 for length 7 and width 7' },
];

// 8. removeDuplicates(arr)
// Removes duplicate elements from an array.
function removeDuplicates(arr) {
    // Your code here
    return []; // Placeholder
}
removeDuplicates.testCases = [
    { input: [[1, 2, 2, 3, 1]], expected: [1, 2, 3], description: 'should remove duplicates from [1, 2, 2, 3, 1]' },
    { input: [['a', 'b', 'a', 'c']], expected: ['a', 'b', 'c'], description: 'should remove duplicates from ["a", "b", "a", "c"]' },
    { input: [[1, 2, 3]], expected: [1, 2, 3], description: 'should return same array if no duplicates' },
    { input: [[]], expected: [], description: 'should return empty array for empty array' },
];

// 9. capitalizeFirstLetter(str)
// Capitalizes the first letter of a string.
function capitalizeFirstLetter(str) {
    // Your code here
    return ''; // Placeholder
}
capitalizeFirstLetter.testCases = [
    { input: ['hello'], expected: 'Hello', description: 'should capitalize "hello" to "Hello"' },
    { input: ['world'], expected: 'World', description: 'should capitalize "world" to "World"' },
    { input: ['a'], expected: 'A', description: 'should capitalize "a" to "A"' },
    { input: [''], expected: '', description: 'should return empty string for empty string' },
    { input: ['123test'], expected: '123test', description: 'should not change if first char is not a letter' },
];

// 10. sumArray(arr)
// Sums all numbers in an array.
function sumArray(arr) {
    // Your code here
    return 0; // Placeholder
}
sumArray.testCases = [
    { input: [[1, 2, 3]], expected: 6, description: 'should return 6 for [1, 2, 3]' },
    { input: [[-1, 0, 1]], expected: 0, description: 'should return 0 for [-1, 0, 1]' },
    { input: [[]], expected: 0, description: 'should return 0 for empty array' },
    { input: [[10]], expected: 10, description: 'should return 10 for [10]' },
];

// 11. isPalindrome(str)
// Checks if a string is a palindrome (reads the same forwards and backwards, case-insensitive, ignoring non-alphanumeric characters).
function isPalindrome(str) {
    // Your code here
    return false; // Placeholder
}
isPalindrome.testCases = [
    { input: ['madam'], expected: true, description: 'should return true for "madam"' },
    { input: ['A man, a plan, a canal: Panama'], expected: true, description: 'should return true for "A man, a plan, a canal: Panama"' },
    { input: ['hello'], expected: false, description: 'should return false for "hello"' },
    { input: ['racecar'], expected: true, description: 'should return true for "racecar"' },
    { input: [''], expected: true, description: 'should return true for empty string' },
];

// 12. fizzBuzz(num)
// Returns "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for both, and the number otherwise.
// This function should return an array of results from 1 to num.
function fizzBuzz(num) {
    // Your code here
    return []; // Placeholder
}
fizzBuzz.testCases = [
    { input: [3], expected: [1, 2, 'Fizz'], description: 'should return correct array for 3' },
    { input: [5], expected: [1, 2, 'Fizz', 4, 'Buzz'], description: 'should return correct array for 5' },
    { input: [15], expected: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'], description: 'should return correct array for 15' },
];

// 13. factorial(num)
// Calculates the factorial of a number.
function factorial(num) {
    // Your code here
    return 0; // Placeholder
}
factorial.testCases = [
    { input: [0], expected: 1, description: 'should return 1 for 0' },
    { input: [1], expected: 1, description: 'should return 1 for 1' },
    { input: [5], expected: 120, description: 'should return 120 for 5' },
    { input: [7], expected: 5040, description: 'should return 5040 for 7' },
];

// 14. findLongestWord(str)
// Finds the longest word in a sentence. If there are multiple words with the same longest length, return the first one.
function findLongestWord(str) {
    // Your code here
    return ''; // Placeholder
}
findLongestWord.testCases = [
    { input: ['The quick brown fox jumped over the lazy dog'], expected: 'jumped', description: 'should return "jumped"' },
    { input: ['hello world'], expected: 'hello', description: 'should return "hello"' },
    { input: ['a b ccc dddd'], expected: 'dddd', description: 'should return "dddd"' },
    { input: [''], expected: '', description: 'should return empty string for empty string' },
];


module.exports = {
    addTwoNumbers,
    reverseString,
    isEven,
    findMax,
    countVowels,
    celsiusToFahrenheit,
    getAreaOfRectangle,
    removeDuplicates,
    capitalizeFirstLetter,
    sumArray,
    isPalindrome,
    fizzBuzz,
    factorial,
    findLongestWord,
};