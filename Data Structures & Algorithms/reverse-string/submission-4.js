class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        function solve(s, left, right) {
            if (left >= right) {
                return;
            }
            [s[left], s[right]] = [s[right], s[left]];
            return solve(s, left+1, right-1);
        }
        solve(s, 0, s.length-1);
    }
}
