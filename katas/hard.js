// Hard Katas

// 1. mergeSortedArrays(arr1, arr2)
// Merges two sorted arrays into a single sorted array.
// Do not use Array.prototype.concat() or Array.prototype.sort().
function mergeSortedArrays(arr1, arr2) {
    // Your code here
    return []; // Placeholder
}
mergeSortedArrays.testCases = [
    { input: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6], description: 'should merge [1,3,5] and [2,4,6]' },
    { input: [[], [1, 2, 3]], expected: [1, 2, 3], description: 'should merge empty array with [1,2,3]' },
    { input: [[1, 2, 3], []], expected: [1, 2, 3], description: 'should merge [1,2,3] with empty array' },
    { input: [[1, 2], [1, 2]], expected: [1, 1, 2, 2], description: 'should merge [1,2] and [1,2]' },
    { input: [[-5, 0, 5], [-10, 1, 10]], expected: [-10, -5, 0, 1, 5, 10], description: 'should merge arrays with negative numbers' },
];

module.exports = {
    mergeSortedArrays,
};