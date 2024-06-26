/* 
NICKS PEDAC
Break down Problem
Asking Questions:
- Set of questions for Arrays, Objects, Strings

Model out a problem, how a single solution would look at each step for what you need

*/





// Column with Max Sum

// Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.

// Example
// nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
// n = 4
// Gives the array:

// [
//  [4, 14, 12,  7],
//  [14, 16, 5, 13],
//  [7, 16, 11, 19]
// ]

// 1, 2, 3, 4 (column)
// 25, 46, 28, 39 (sum)
/*
P:

We want to create a function that accepts an array of numbers, and a number, as
an argument. The function should split the numbers in the array into an array of
subarrays with the size of the given number, find the sum of each subarray, and
then return the subarray with the largest sum. If two subarrays have an equal
max sum, return the one with the smallest index.

Rules:
1. Split the given array of numbers into columns with the size based on the
   given Number
2. Find the sum of each column and return the number of the column with the
   largest sum
3. All numbers will be whole numbers
4. Assume that all columns will have an equal amount of numbers
5. Assume all numbers will be greater than 0.
6. The array will only contain numbers, no other data types.
7. If the given array is empty, return 0.
8. The given number will always be greater than or equal to 2.
9. Assume that you will always be given exactly two arguments.
10. Will not be dealing with sparse arrays.
11. There is no maximum amount of numbers that can be contained in the given
    array.
12. The minimum amount of numbers in the given array will be equal to `n`.

Data Structures:

I: Array of Numbers
Intermediate: Array
O: Number

-- Modelling:

I: [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19], 4
O: 2

Create an array of subarrays
- Each array should be a slice the size of `n` (n = 4)

[
  [4, 14, 12, 7],
  [14, 16, 5, 13],
  [7, 16, 11, 19]
]

Group all the numbers in each column into their own subarray

[
  [4, 14, 7],
  [4, 16, 16],
  [12, 5, 11],
  [7, 13, 19]
]

Now we need to sum the columns

[25, 46, 28, 39]

Return the index value + 1 of the max
- If there are two maxes return the smaller index

-- Algorithm:

Initialize `columns` to a collection
Initialize `max` to 0
Initialize `maxCol` to 0

Iterate through the given array and its indices
- Create a slice of the array starting at index 0, with the size determined by
  `n`
  - Push this slice into `columns`
- Increment the index by 4
- Repeat until the end of the array

Modify the `columns` collection
- Group all numbers in a column into a row
  - Repeat until all columns and their values are grouped into their row

Transform each row in `columns` to the sum of all of its values
- Iterate through this collection of sums
  - If the current sum is greater than `max`
    - Assign `max` to that sum
    - Assign it's index + 1 to `maxCol`

  - More, Less, Different, Empty
*/
