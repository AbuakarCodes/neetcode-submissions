class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};

        for (let str of strs) {
            let count = new Array(26).fill(0);

            for (let i = 0; i < str.length; i++) {
                let index = str.charCodeAt(i) - 97;
                count[index]++;
            }

            let key = count.join("#");

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(str);
        }

        return Object.values(groups);
    }
}
