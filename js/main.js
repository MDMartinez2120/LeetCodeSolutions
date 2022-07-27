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
    let merged = [...nums1, ...nums2];
    let sortedArray = merged.sort();

    const median = () => {
        return sortedArray.slice().sort((a, b) => a - b)[Math.floor(sortedArray.length / 2)];
    };

    const mid = () => {
        sortedArray.sort(function(a, b){ return a - b; });
        let i = sortedArray.length / 2;
        return i % 1 === 0 ? (sortedArray[i - 1] + sortedArray[i]) / 2 : sortedArray[Math.floor(i)];
    }

    if (sortedArray.length === 3){
        return median();
    }if (sortedArray.length > 3){
        return mid();
    }if (sortedArray.length <= 1){
        return sortedArray.length.values();
    }
};

console.log(findMedianSortedArrays(nums1, nums2));
