class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // make a hash map

    // move through each element in array, make each element as a key.

    // if element appreas again +1 in the object

    // map over the object those eho have the same vale
    //  put there ken in a array and return

    topKFrequent(nums, k) {
        let returnArray = [];
        let hash = {};

        for (let i = 0; i < nums.length; i++) {
            if (hash[nums[i]] == undefined) hash[nums[i]] = 1;
            else hash[nums[i]] += 1;
        }

        let sortedHash_Array = Object.entries(hash).sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < k; i++) {
            returnArray.push(Number(sortedHash_Array[i][0]));
        }

        return returnArray;
    }
}
