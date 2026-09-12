class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    wiggleSort(nums) {
        nums.sort((a,b) => a-b);
        for (let i=1; i<nums.length-1; i+=2) {
            let temp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = temp;
        }
        return nums;
    }
}
