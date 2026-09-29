// loop through the whole array
// nested loop avoinding the ith index

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j< nums.length; j++) {
                if (j == i) continue;
                if (nums[i] === nums[j]) return true;
            }
        }
        return false;
    }
}
