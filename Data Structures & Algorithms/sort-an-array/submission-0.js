class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let min = nums[0];
        let max = nums[0];
        
        for (let num of nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }

        let count = new Array(max-min+1).fill(0);
        for (let num of nums) {
            count[num - min]++;
        }
        let index = 0;
        for (let i=0; i<count.length; i++) {
            while(count[i] > 0) {
                nums[index] = i + min;
                index++;
                count[i]--;
            }
        }
        return nums;
    }
}
