'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
//Complexity O(n)
function getSecondLargestNaive(nums) {
    // Complete the function
    let secondLargest = 0;
    let largest = 0;
    let i;
    for(i = 0 ; i < nums.length ; i++) {
        if(nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

// Complexity O(nlogn)
function getSecondLargestRefactored(nums) {
    // Complete the function
    nums.sort(function(a, b) {
        return b-a;
    });

    let i;
    for(i = 1 ; i < nums.length ; i++) {
        if(nums[i] < nums[0]) {
            return nums[i];
        }
    }
}

// Complexity O(nlogn)
function getSecondLargestRefactored(nums) {
    // Complete the function
    return [...new Set(nums)].sort((a,b) => b-a)[1];
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargestNaive(nums));
}