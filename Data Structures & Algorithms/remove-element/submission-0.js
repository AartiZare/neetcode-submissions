class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let n = nums.length;
        for(let i=0; i<n; i++){
            if(nums[i] === val){
                for(let j=i; j<n-1; j++){
                    nums[j] = nums[j+1];
                }
                n--;
                i--;
            }
        }
        return n;
    }
}
