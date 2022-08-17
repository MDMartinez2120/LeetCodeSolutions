// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

let twoSum = function(nums, target) {
    const lookup = {};

    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        const diffIndex = nums.indexOf(diff);

        if (diffIndex !== -1 && diffIndex !== i){
            return [i, diffIndex];
        }
    }
};

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
const nums1 = [];
const nums2 = [2];

let findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2);
    mergedArray.sort(function (a, b) {
        return a - b
    });
    const even = mergedArray.length / 2,
        isOdd = mergedArray.length % 2;

    if (isOdd > 0) {
        return mergedArray[Math.floor(mergedArray.length / 2)];
    } else {
        return (mergedArray[even] + mergedArray[even - 1]) / 2;
    }
};

console.log(findMedianSortedArrays(nums1, nums2));

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

let maxProfit = function(prices) {
    let maximumProfit = 0;
        let minPrice = prices[0]

    for (let sell = 1; sell < prices.length; sell++){
        let sellPrice = prices[sell]
        let profit = sellPrice - minPrice

        maximumProfit = Math.max(maximumProfit, profit)

        if (sellPrice < minPrice) minPrice = sellPrice;
    }
    return maximumProfit
};

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let containsDuplicate = function(nums) {
    const result = nums.some(element => {
        if (nums.indexOf(element) !== nums.lastIndexOf(element)){
            return true;
        }
        return false;
    })
    return result;
};



