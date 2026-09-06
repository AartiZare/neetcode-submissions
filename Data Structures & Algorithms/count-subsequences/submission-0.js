class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const memo = Array.from(
            { length: s.length },
            () => Array(t.length).fill(-1)
        );

        function solve(i, j) {
            if (j === t.length) {
                return 1;
            } 

            if (i === s.length) {
                return 0;
            }

            if (memo[i][j] !== -1){
                return memo[i][j];
            }

            if (s[i] === t[j]) {
                memo[i][j] = solve(i+1, j+1) + solve(i+1, j);
            } else {
                memo[i][j] = solve(i+1, j);
            }
            return memo[i][j];
        }
        return solve(0, 0);
    }
}
