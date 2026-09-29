class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        let decissionArray = new Array(26).fill(0);

        let string1 = s.toLowerCase();
        let string2 = t.toLowerCase();

        for (let i = 0; i < s.length; i++) {
            decissionArray[string1.charCodeAt(i) - 97]++;
            decissionArray[string2.charCodeAt(i) - 97]--;
        }

        for (let i = 0; i < decissionArray.length; i++) {
            if (decissionArray[i] !== 0) return false;
        }

        return true;
    }
}
