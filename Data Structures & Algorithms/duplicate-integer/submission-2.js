// loop through the whole array
// if no key in the object then create the key and + 1
// if already existed then + 1

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {};

        for (let i = 0; i < nums.length; i++) {
            if (hash[nums[i]] == undefined) hash[nums[i]] = 1;
            else hash[nums[i]] += 1;
        }
        let hashKeys = Object.keys(hash);

        for (let j = 0; j < hashKeys.length; j++) {
            console.log(hash[hashKeys[j]]);
            if (hash[hashKeys[j]] > 1) return true;
        }
        return false;
    }
}
