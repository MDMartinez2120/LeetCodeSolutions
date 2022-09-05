// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// //You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// let twoSum = function(nums, target) {
//     const lookup = {};
//
//     for (let i = 0; i < nums.length; i++){
//         const diff = target - nums[i];
//         const diffIndex = nums.indexOf(diff);
//
//         if (diffIndex !== -1 && diffIndex !== i){
//             return [i, diffIndex];
//         }
//     }
// };
//
// // Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// const nums1 = [];
// const nums2 = [2];
//
// let findMedianSortedArrays = function(nums1, nums2) {
//     const mergedArray = nums1.concat(nums2);
//     mergedArray.sort(function (a, b) {
//         return a - b
//     });
//     const even = mergedArray.length / 2,
//         isOdd = mergedArray.length % 2;
//
//     if (isOdd > 0) {
//         return mergedArray[Math.floor(mergedArray.length / 2)];
//     } else {
//         return (mergedArray[even] + mergedArray[even - 1]) / 2;
//     }
// };
//
// console.log(findMedianSortedArrays(nums1, nums2));
//
// // You are given an array prices where prices[i] is the price of a given stock on the ith day.
// // You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//
// let maxProfit = function(prices) {
//     let maximumProfit = 0;
//         let minPrice = prices[0]
//
//     for (let sell = 1; sell < prices.length; sell++){
//         let sellPrice = prices[sell]
//         let profit = sellPrice - minPrice
//
//         maximumProfit = Math.max(maximumProfit, profit)
//
//         if (sellPrice < minPrice) minPrice = sellPrice;
//     }
//     return maximumProfit
// };
//
// // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//
// let containsDuplicate = function(nums) {
//     const result = nums.some(element => {
//         if (nums.indexOf(element) !== nums.lastIndexOf(element)){
//             return true;
//         }
//         return false;
//     })
//     return result;
// };

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

let productExceptSelf = function(nums) {
    function getMaxNumber(){
        let i;

        let max = nums[0];

        for (let i = 0; i < nums.length; i++){
            if (nums[i] > max){
                max = nums[i];
            }
        }
    }
    return getMaxNumber();
};

function doubleChar(str) {

    return str.split('').map(function(e){
        return e + e;
    }).join('')

}

function isPythagoreanTriple(integers) {
    integers = integers.map(e => e*e);
    integers.sort((a,b) => a-b);
    for(let i=integers.length-1; i>1; i--) {
        let j = 0;
        let k = i-1;
        while(j<k) {
            if(integers[j]+integers[k]===integers[i]) {
                let a = Math.sqrt(integers[j]);
                let b = Math.sqrt(integers[k]);
                let c = Math.sqrt(integers[i])
                return true;
            } else {
                return false;
            }
        }
    }
    return -1;
}

function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0){
        return true;
    }else {
        return false;
    }
}

const countBy = (x, n) => new Array(n).fill(0).map((v, i) => x * (i + 1));

function descendingOrder(num){
    return parseInt(num.toString().split("").sort().reverse().join(""));
}

function friend(friends){
    let newArr = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            newArr.push(friends[i]);
        }
    }
    return newArr;
}

function getMiddle(s) {
    const middle = Math.floor(s.length / 2);
    let result = s[middle];
    if(s.length % 2 === 0) {
        result = s[middle - 1] + result;
    }
    return result;
}

function highAndLow(numbers){
    let numArr = numbers.split(" ");
    let highestNum = Math.max(...numArr);
    let lowestNum = Math.min(...numArr);
    return highestNum + " " + lowestNum;
}

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return "found the needle at position " + i;
        }
    }
}

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}