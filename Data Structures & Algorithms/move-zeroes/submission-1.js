class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let n = nums.length;
        for(let i=0; i<n; i++){
            if(nums[i] === 0){
                for(let j=i; j<n-1; j++){
                    nums[j] = nums[j+1];
                }
                nums[n-1] = 0;
                i--;
                n--;
            }
        }
        return nums;
    }
}
