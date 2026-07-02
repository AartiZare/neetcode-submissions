class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
       let counts = {};
       let countT = {};
       for(let i=0; i<s.length; i++){
        counts[s[i]] = (counts[s[i]] || 0)+1;
        countT[t[i]] = (countT[t[i]] || 0)+1;
       }
       for(let key in counts){
        if(counts[key] !== countT[key]){
            return false;
        }
       }
       return true;
    }
}
