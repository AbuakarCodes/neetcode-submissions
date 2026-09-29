class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
     groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (const char of str) {
            const index = char.charCodeAt(0) - 97;
            count[index]++;
        }

        const key = count.join("#");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
}
}

function isAnagram(s, t) {
    let hash_S = {};
    let hash_T = {};

    for (let i = 0; i < s.length; i++) {
        if (hash_S[s[i]] == undefined) hash_S[s[i]] = 1;
        else hash_S[s[i]]++;
    }

    let hash_SKey = Object.keys(hash_S).sort();

    for (let i = 0; i < t.length; i++) {
        if (hash_T[t[i]] == undefined) hash_T[t[i]] = 1;
        else hash_T[t[i]]++;
    }

    let hash_TKey = Object.keys(hash_T).sort();

    if (hash_SKey.join("") != hash_TKey.join("")) return false;

    for (let i = 0; i < hash_SKey.length; i++) {
        if (hash_S[hash_SKey[i]] != hash_T[hash_TKey[i]]) {
            return false;
        }
    }

    return true;
}
