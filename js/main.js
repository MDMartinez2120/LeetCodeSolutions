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
