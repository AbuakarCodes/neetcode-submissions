class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
     isAnagram(s, t) {
  let hash_s = {}
  let hash_t = {}

  for (let i = 0; i < s.length; i++) {
    if (hash_s[s[i]] == undefined) hash_s[s[i]] = 1
    else hash_s[s[i]] += 1
  }

  let hash_sKey = Object.keys(hash_s).sort()

  for (let i = 0; i < t.length; i++) {
    if (hash_t[t[i]] == undefined) hash_t[t[i]] = 1
    else hash_t[t[i]] += 1
  }

  let hash_tKey = Object.keys(hash_t).sort()

  //   find key in hash1 == hash2, if its not there rerturn false
  // if found, comare there value if not same return false

  // else return true

  if (hash_sKey.join("") != hash_tKey.join("")) return false

  for (let i = 0; i < s.length; i++) {
    if (hash_s[hash_sKey[i]] != hash_t[hash_tKey[i]]) {
      console.log(hash_s[hash_sKey[i]])
      console.log(hash_tKey[i])
      return false
    }
  }

  return true
}

}
