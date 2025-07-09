// Beginner Katas

// 1. addTwoNumbers(a, b)
// Returns the sum of two numbers.
function addTwoNumbers(a, b) {
   
    return a + b; 
}
addTwoNumbers.testCases = [
    { input: [1, 2], expected: 3, description: 'should return 3 for 1 and 2' },
    { input: [-1, 5], expected: 4, description: 'should return 4 for -1 and 5' },
    { input: [0, 0], expected: 0, description: 'should return 0 for 0 and 0' },
];

// 2. reverseString(str)
// Reverses a given string.
function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;

}
reverseString.testCases = [
    { input: ['hello'], expected: 'olleh', description: 'should reverse "hello" to "olleh"' },
    { input: ['world'], expected: 'dlrow', description: 'should reverse "world" to "dlrow"' },
    { input: ['a'], expected: 'a', description: 'should return "a" for "a"' },
    { input: ['',], expected: '', description: 'should return empty string for empty string' },
];

// 3. isEven(num)
// Checks if a number is even.
function isEven(num) {

    return num % 2 == 0;
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
let max = Math.max(...arr);

console.log(max);
  return max;
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
     let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
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

    return ((celsius * 9.0 / 5.0) + 32.0);
}
celsiusToFahrenheit.testCases = [
    { input: [0], expected: 32, description: 'should return 32 for 0 Celsius' },
    { input: [100], expected: 212, description: 'should return 212 for 100 Celsius' },
    { input: [-10], expected: 14, description: 'should return 14 for -10 Celsius' },
];

// 7. getAreaOfRectangle(length, width)
// Calculates the area of a rectangle.
function getAreaOfRectangle(length, width) {
    
    return length * width;
}
getAreaOfRectangle.testCases = [
    { input: [5, 10], expected: 50, description: 'should return 50 for length 5 and width 10' },
    { input: [0, 10], expected: 0, description: 'should return 0 for length 0' },
    { input: [7, 7], expected: 49, description: 'should return 49 for length 7 and width 7' },
];

// 8. removeDuplicates(arr)
// Removes duplicate elements from an array.
function removeDuplicates(arr) {
    
   return [...new Set(arr)];
}
removeDuplicates.testCases = [
    { input: [[1, 2, 2, 3, 1]], expected: [1, 2, 3], description: 'should remove duplicates from [1, 2, 2, 3, 1]' },
    { input: [['a', 'b', 'a', 'c']], expected: ['a', 'b', 'c'], description: 'should remove duplicates from ["a", "b", "a", "c"]' },
    { input: [[1, 2, 3]], expected: [1, 2, 3], description: 'should return same array if no duplicates' },
    { input: [[],], expected: [], description: 'should return empty array for empty array' },
];

// 9. capitalizeFirstLetter(str)
// Capitalizes the first letter of a string.
function capitalizeFirstLetter(str) {
    
    return str.charAt(0).toUpperCase() + str.slice(1)
}
capitalizeFirstLetter.testCases = [
    { input: ['hello'], expected: 'Hello', description: 'should capitalize "hello" to "Hello"' },
    { input: ['world'], expected: 'World', description: 'should capitalize "world" to "World"' },
    { input: ['a'], expected: 'A', description: 'should capitalize "a" to "A"' },
    { input: ['',], expected: '', description: 'should return empty string for empty string' },
    { input: ['123test'], expected: '123test', description: 'should not change if first char is not a letter' },     
];

// 10. sumArray(arr)
// Sums all numbers in an array.
function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element){
        total += element;
    })

    return total;
}
sumArray.testCases = [
    { input: [[1, 2, 3]], expected: 6, description: 'should return 6 for [1, 2, 3]' },
    { input: [[-1, 0, 1]], expected: 0, description: 'should return 0 for [-1, 0, 1]' },
    { input: [[],], expected: 0, description: 'should return 0 for empty array' },
    { input: [[10]], expected: 10, description: 'should return 10 for [10]' },
];

// 11. isPalindrome(str)
// Checks if a string is a palindrome (reads the same forwards and backwards, case-insensitive, ignoring non-alphanumeric characters).
function isPalindrome(str) {
    
    return str === str.split('').reverse().join('');
}
isPalindrome.testCases = [
    { input: ['madam'], expected: true, description: 'should return true for "madam"' },
    { input: ['A man, a plan, a canal: Panama'], expected: true, description: 'should return true for "A man, a plan, a canal: Panama"' },
    { input: ['hello'], expected: false, description: 'should return false for "hello"' },
    { input: ['racecar'], expected: true, description: 'should return true for "racecar"' },
    { input: ['',], expected: true, description: 'should return true for empty string' },
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
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
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
    str = str.split("")
    return str.sort((a, b) => b.length - a.length)[0]
}
findLongestWord.testCases = [
    { input: ['The quick brown fox jumped over the lazy dog'], expected: 'jumped', description: 'should return "jumped"' },
    { input: ['hello world'], expected: 'hello', description: 'should return "hello"' },
    { input: ['a b ccc dddd'], expected: 'dddd', description: 'should return "dddd"' },
    { input: ['',], expected: '', description: 'should return empty string for empty string' },
];

// 15. findMin(arr)
// Finds the minimum number in an array.
function findMin(arr) {
    let min = Math.min(...arr);

console.log(min);
  return min;
}
findMin.testCases = [
    { input: [[1, 2, 3]], expected: 1, description: 'should return 1 for [1, 2, 3]' },
    { input: [[-1, -5, -2]], expected: -5, description: 'should return -5 for [-1, -5, -2]' },
    { input: [[10]], expected: 10, description: 'should return 10 for [10]' },
    { input: [[5, 1, 9, 2]], expected: 1, description: 'should return 1 for [5, 1, 9, 2]' },
];

// 16. averageArray(arr)
// Calculates the average of numbers in an array.
function averageArray(arr) {
    
    return 0; // Placeholder
}
averageArray.testCases = [
    { input: [[1, 2, 3]], expected: 2, description: 'should return 2 for [1, 2, 3]' },
    { input: [[10, 20, 30]], expected: 20, description: 'should return 20 for [10, 20, 30]' },
    { input: [[],], expected: 0, description: 'should return 0 for empty array' },
    { input: [[5]], expected: 5, description: 'should return 5 for [5]' },
];

// 17. getFirstElement(arr)
// Returns the first element of an array.
function getFirstElement(arr) {
    // Your code here
    return undefined; // Placeholder
}
getFirstElement.testCases = [
    { input: [[1, 2, 3]], expected: 1, description: 'should return the first element' },
    { input:[['a', 'b']], expected: 'a', description: 'should return the first string element' },
    { input: [[]], expected: undefined, description: 'should return undefined for an empty array' },
];

// 18. getLastElement(arr)
// Returns the last element of an array.
function getLastElement(arr) {
    // Your code here
    return undefined; // Placeholder
}
getLastElement.testCases = [
    { input: [[1, 2, 3]], expected: 3, description: 'should return the last element' },
    { input:[['a', 'b']], expected: 'b', description: 'should return the last string element' },
    { input: [[]], expected: undefined, description: 'should return undefined for an empty array' },
];

// 19. sumOfEvenNumbers(arr)
// Calculates the sum of all even numbers in an array.
function sumOfEvenNumbers(arr) {
    // Your code here
    return 0; // Placeholder
}
sumOfEvenNumbers.testCases = [
    { input: [[1, 2, 3, 4]], expected: 6, description: 'should return 6 for [1, 2, 3, 4]' },
    { input: [[2, 4, 6]], expected: 12, description: 'should return 12 for [2, 4, 6]' },
    { input: [[1, 3, 5]], expected: 0, description: 'should return 0 for array with no even numbers' },
    { input: [[]], expected: 0, description: 'should return 0 for an empty array' },
];

// 20. sumOfOddNumbers(arr)
// Calculates the sum of all odd numbers in an array.
function sumOfOddNumbers(arr) {
    // Your code here
    return 0; // Placeholder
}
sumOfOddNumbers.testCases = [
    { input: [[1, 2, 3, 4]], expected: 4, description: 'should return 4 for [1, 2, 3, 4]' },
    { input: [[1, 3, 5]], expected: 9, description: 'should return 9 for [1, 3, 5]' },
    { input: [[2, 4, 6]], expected: 0, description: 'should return 0 for array with no odd numbers' },
    { input: [[]], expected: 0, description: 'should return 0 for an empty array' },
];

// 21. findIndexOf(arr, element)
// Finds the index of a given element in an array. Returns -1 if not found.
function findIndexOf(arr, element) {
    // Your code here
    return -1; // Placeholder
}
findIndexOf.testCases = [
    { input: [[1, 2, 3], 2], expected: 1, description: 'should return the index of the element' },
    { input: [['a', 'b', 'c'], 'c'], expected: 2, description: 'should return the index of the string element' },
    { input: [[1, 2, 3], 4], expected: -1, description: 'should return -1 if element not found' },
    { input: [[]], expected: -1, description: 'should return -1 for an empty array' },
];

// 22. concatenateArrays(arr1, arr2)
// Concatenates two arrays.
function concatenateArrays(arr1, arr2) {
    // Your code here
    return []; // Placeholder
}
concatenateArrays.testCases = [
    { input: [[1, 2], [3, 4]], expected: [1, 2, 3, 4], description: 'should concatenate two arrays' },
    { input: [['a'], ['b']], expected: ['a', 'b'], description: 'should concatenate two string arrays' },
    { input: [[], [1, 2]], expected: [1, 2], description: 'should handle empty first array' },
    { input: [[1, 2], []], expected: [1, 2], description: 'should handle empty second array' },
];

// 23. getAbsoluteValue(num)
// Returns the absolute value of a number.
function getAbsoluteValue(num) {
    // Your code here
    return 0; // Placeholder
}
getAbsoluteValue.testCases = [
    { input: [5], expected: 5, description: 'should return 5 for 5' },
    { input: [-5], expected: 5, description: 'should return 5 for -5' },
    { input: [0], expected: 0, description: 'should return 0 for 0' },
];

// 24. convertToUppercase(str)
// Converts a string to uppercase.
function convertToUppercase(str) {
    // Your code here
    return ''; // Placeholder
}
convertToUppercase.testCases = [
    { input: ['hello'], expected: 'HELLO', description: 'should convert to uppercase' },
    { input: ['WORLD'], expected: 'WORLD', description: 'should remain uppercase' },
    { input: ['HeLlO'], expected: 'HELLO', description: 'should convert mixed case to uppercase' },
    { input: [''], expected: '', description: 'should return empty string for empty string' },
];

// 25. convertToLowercase(str)
// Converts a string to lowercase.
function convertToLowercase(str) {
    // Your code here
    return ''; // Placeholder
}
convertToLowercase.testCases = [
    { input: ['HELLO'], expected: 'hello', description: 'should convert to lowercase' },
    { input: ['world'], expected: 'world', description: 'should remain lowercase' },
    { input: ['WoRlD'], expected: 'world', description: 'should convert mixed case to lowercase' },
    { input: [''], expected: '', description: 'should return empty string for empty string' },
];

// 26. startsWith(str, prefix)
// Checks if a string starts with a given prefix.
function startsWith(str, prefix) {
    // Your code here
    return false; // Placeholder
}
startsWith.testCases = [
    { input: ['hello world', 'hello'], expected: true, description: 'should return true if string starts with prefix' },
    { input: ['hello world', 'world'], expected: false, description: 'should return false if string does not start with prefix' },
    { input: ['', ''], expected: true, description: 'should return true for empty string and empty prefix' },
    { input: ['hello', ''], expected: true, description: 'should return true for any string and empty prefix' },
];

// 27. endsWith(str, suffix)
// Checks if a string ends with a given suffix.
function endsWith(str, suffix) {
    // Your code here
    return false; // Placeholder
}
endsWith.testCases = [
    { input: ['hello world', 'world'], expected: true, description: 'should return true if string ends with suffix' },
    { input: ['hello world', 'hello'], expected: false, description: 'should return false if string does not end with suffix' },
    { input: ['', ''], expected: true, description: 'should return true for empty string and empty suffix' },
    { input: ['world', ''], expected: true, description: 'should return true for any string and empty suffix' },
];

// 28. repeatString(str, num)
// Repeats a string a given number of times.
function repeatString(str, num) {
    if (num < 0) return '';
    return str.repeat(num);
}

repeatString.testCases = [
    { input: ['abc', 3], expected: 'abcabcabc', description: 'should repeat string 3 times' },
    { input: ['*', 5], expected: '*****', description: 'should repeat character 5 times' },
    { input: ['abc', 0], expected: '', description: 'should return empty string for 0 repetitions' },
    { input: ['abc', -1], expected: '', description: 'should return empty string for negative repetitions' },
];

// 29. trimString(str)
// Removes whitespace from both ends of a string.
function trimString(str) {
    // Your code here
    return ''; // Placeholder
}
trimString.testCases = [
    { input: ['  hello  '], expected: 'hello', description: 'should trim whitespace from both ends' },
    { input: ['hello'], expected: 'hello', description: 'should return same string if no whitespace' },
    { input: ['  '], expected: '', description: 'should return empty string for only whitespace' },
    { input: [''], expected: '', description: 'should return empty string for empty string' },
];

// 30. roundNumber(num)
// Rounds a number to the nearest integer.
function roundNumber(num) {
    // Your code here
    return 0; // Placeholder
}
roundNumber.testCases = [
    { input: [3.14], expected: 3, description: 'should round down 3.14 to 3'}, 
    { input: [3.7], expected: 4, description: 'should round up 3.7 to 4' },
    { input: [3.5], expected: 4, description: 'should round 3.5 to 4' },
    { input: [-3.7], expected: -4, description: 'should round -3.7 to -4' },
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
    findMin,
    averageArray,
    getFirstElement,
    getLastElement,
    sumOfEvenNumbers,
    sumOfOddNumbers,
    findIndexOf,
    concatenateArrays,
    getAbsoluteValue,
    convertToUppercase,
    convertToLowercase,
    startsWith,
    endsWith,
    repeatString,
    trimString,
    roundNumber,
};